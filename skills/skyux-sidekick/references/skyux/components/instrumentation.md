---
Title: Instrumentation
Reference: https://developer.blackbaud.com/skyux/components/instrumentation
---

# Instrumentation

The instrumentation feature reports on user interactions with SKY UX components. Register a `SkyInstrumentationListener` with the application to receive those events, and then use the `skyInstrumentationContext` directive on each page to describe the region of the page that each event came from.

Instrumentation gives your application a place to observe how people use the SKY UX components that it renders without adding event handlers to every component. Because SKY UX emits the events, the data stays consistent across applications and keeps working as components evolve.

Use instrumentation to measure feature adoption, to find where users get stuck, and to feed product analytics with interactions that would otherwise be invisible to your application.

## Installation

NPM package

`@skyux/core`[View in NPM](https://www.npmjs.com/package/@skyux/core) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/core/src/lib/modules/instrumentation/context.ts#L48)

Install with NPM

`npm install --save-exact @skyux/core`

## SkyInstrumentationContext

Type: Directive

Selector: `[skyInstrumentationContext]`

Describes the region of the page that the instrumentation events emitted within this element came from. Nest contexts to add more specific information.

### Inputs

#### `skyInstrumentationContext: InputSignal<SkyInstrumentationContextValue>`

The context to attach to instrumentation events emitted within this element.

## SkyInstrumentationContextValue

Type: Interface

Describes the region of the page that an instrumentation event came from.

    interface SkyInstrumentationContextValue {
      detail?: Record<string, unknown>;
      name: string;
      parent?: SkyInstrumentationContextValue;
    }

### Properties

#### `detail?: Record<string, unknown>`

Values describing the context, such as record identifiers.

#### `name: string`

Identifies the context. Listeners filter on this value.

#### `parent?: SkyInstrumentationContextValue`

The context that encloses this one, when contexts are nested. Walk this chain to read the name and detail of each enclosing context.

## provideSkyInstrumentationListener

Type: Function

Registers a listener to receive instrumentation events. Provide this in your application config so that components in lazy-loaded routes can reach the listener.

    function provideSkyInstrumentationListener(listener: Type<<a class="sky-docs-codespan-anchor" href="https://developer.blackbaud.com/skyux/components/instrumentation?docs-active-tab=design#interface_sky-instrumentation-listener">SkyInstrumentationListener</a>>): EnvironmentProviders

### Parameters

#### `listener: Type<SkyInstrumentationListener>`

## SkyInstrumentationListener

Type: Interface

Receives the instrumentation events emitted by SKY UX components.

    interface SkyInstrumentationListener {
      handleEvent: void;
    }

### Properties

#### `handleEvent: void`

Called once for each event, in the order the events are emitted.

## SkyInstrumentationEvent

Type: Interface

An interaction reported by a SKY UX component, delivered to every registered `SkyInstrumentationListener`.

    interface SkyInstrumentationEvent {
      context?: SkyInstrumentationContextValue;
      eventDetail?: Record<string, unknown>;
      eventName: string;
    }

### Properties

#### `context?: SkyInstrumentationContextValue`

The context resolved from the nearest `skyInstrumentationContext`, or `undefined` when the component is not within one.

#### `eventDetail?: Record<string, unknown>`

Values describing the interaction, such as the help key that was requested.

#### `eventName: string`

The name of the event, such as `sky.help-inline.help-requested`.

## provideSkyInstrumentationContextFrom

Type: Function

Forwards the instrumentation context resolved from the given injector to a dynamically created component, such as a modal or flyout, which would otherwise render outside of the launching element.

    function provideSkyInstrumentationContextFrom(injector: Injector): StaticProvider[]

### Parameters

#### `injector: Injector`

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## provideSkyInstrumentationTesting

Type: Function

Registers a listener that records the instrumentation events emitted during a unit test. Inject `SkyInstrumentationTestingController` to validate them.

    function provideSkyInstrumentationTesting(): EnvironmentProviders

## SkyInstrumentationTestingController

Type: Class

Validates the instrumentation events emitted during a unit test.

### Methods

#### `expectEvent(evt: SkyInstrumentationEvent): void`

Throws an error if the expected event was not emitted.

#### Parameters

##### `evt: SkyInstrumentationEvent`

The expected event. All properties must match an emitted event.

#### Returns

`void`

#### `expectEventCount(evt: SkyInstrumentationEvent, count: number): void`

Throws an error if the expected event was not emitted a specific number of times.

#### Parameters

##### `evt: SkyInstrumentationEvent`

The expected event. All properties must match an emitted event.

##### `count: number`

The expected number of times the event was emitted.

#### Returns

`void`

## Code Examples

### Instrumentation context with basic setup

#### example.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SkyInstrumentationContext } from '@skyux/core';
import { SkyCheckboxModule, SkyInputBoxModule } from '@skyux/forms';

/**
 * @title Instrumentation context with basic setup
 */
@Component({
  imports: [ReactiveFormsModule, SkyCheckboxModule, SkyInputBoxModule, SkyInstrumentationContext],
  selector: 'app-core-instrumentation-basic-example',
  templateUrl: './example.html',
})
export class CoreInstrumentationBasicExample {
  protected formGroup = inject(FormBuilder).group({
    amount: '',
    repeatMonthly: false,
  });
}
```

#### example.html

```html
<form
  [formGroup]="formGroup"
  [skyInstrumentationContext]="{
    name: 'gift-details',
    detail: { recordId: '280-c-r-w' }
  }"
>
  <h2>Gift details</h2>

  <sky-input-box data-sky-id="gift-amount" helpKey="gift-amount.html" labelText="Gift amount" stacked="true">
    <input formControlName="amount" type="text" />
  </sky-input-box>

  <div [skyInstrumentationContext]="{ name: 'recurring-gift' }">
    <h3>Recurring gift</h3>

    <sky-checkbox
      data-sky-id="repeat-monthly"
      formControlName="repeatMonthly"
      helpKey="repeat-monthly.html"
      labelText="Repeat this gift monthly"
    />
  </div>
</form>
```

#### example.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import {
  SkyHelpTestingModule,
  SkyInstrumentationTestingController,
  provideSkyInstrumentationTesting,
} from '@skyux/core/testing';
import { SkyCheckboxHarness, SkyInputBoxHarness } from '@skyux/forms/testing';

import { CoreInstrumentationBasicExample } from './example';

describe('Basic instrumentation context example', () => {
  function setupTest(): {
    controller: SkyInstrumentationTestingController;
    loader: HarnessLoader;
  } {
    TestBed.configureTestingModule({
      imports: [CoreInstrumentationBasicExample, SkyHelpTestingModule],
      providers: [provideNoopSkyAnimations(), provideSkyInstrumentationTesting()],
    });

    const fixture = TestBed.createComponent(CoreInstrumentationBasicExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();

    return {
      controller: TestBed.inject(SkyInstrumentationTestingController),
      loader,
    };
  }

  async function clickCheckboxHelpInline(loader: HarnessLoader): Promise<void> {
    const harness = await loader.getHarness(SkyCheckboxHarness.with({ dataSkyId: 'repeat-monthly' }));

    await harness.clickHelpInline();
  }

  it('should track when a user requests help for the gift amount', async () => {
    const { controller, loader } = setupTest();

    const inputBox = await loader.getHarness(SkyInputBoxHarness.with({ dataSkyId: 'gift-amount' }));

    await inputBox.clickHelpInline();

    controller.expectEvent({
      eventName: 'sky.help-inline.help-requested',
      eventDetail: { helpKey: 'gift-amount.html' },
      context: {
        name: 'gift-details',
        detail: { recordId: '280-c-r-w' },
      },
    });
  });

  it('should track when a user requests help from the recurring gift section', async () => {
    const { controller, loader } = setupTest();

    await clickCheckboxHelpInline(loader);

    controller.expectEvent({
      eventName: 'sky.help-inline.help-requested',
      eventDetail: { helpKey: 'repeat-monthly.html' },
      context: {
        name: 'recurring-gift',
        parent: {
          name: 'gift-details',
          detail: { recordId: '280-c-r-w' },
        },
      },
    });
  });

  it('should track each time a user requests help', async () => {
    const { controller, loader } = setupTest();

    await clickCheckboxHelpInline(loader);
    await clickCheckboxHelpInline(loader);

    controller.expectEventCount(
      {
        eventName: 'sky.help-inline.help-requested',
        eventDetail: { helpKey: 'repeat-monthly.html' },
        context: {
          name: 'recurring-gift',
          parent: {
            name: 'gift-details',
            detail: { recordId: '280-c-r-w' },
          },
        },
      },
      2,
    );
  });
});
```

### Instrumentation context forwarded to a modal

#### example.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyInstrumentationContext } from '@skyux/core';

import { CoreInstrumentationModalLaunchButton } from './launch-button';

/**
 * @title Instrumentation context forwarded to a modal
 */
@Component({
  imports: [CoreInstrumentationModalLaunchButton, SkyInstrumentationContext],
  selector: 'app-core-instrumentation-modal-example',
  template: `
    <div
      [skyInstrumentationContext]="{
        name: 'edit-gift',
        detail: { recordId: '280-c-r-w' },
      }"
    >
      <app-core-instrumentation-modal-launch-button />
    </div>
  `,
})
export class CoreInstrumentationModalExample {}
```

#### example.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import {
  SkyHelpTestingModule,
  SkyInstrumentationTestingController,
  provideSkyInstrumentationTesting,
} from '@skyux/core/testing';
import { SkyModalHarness } from '@skyux/modals/testing';

import { CoreInstrumentationModalExample } from './example';

describe('Instrumentation context forwarded to a modal', () => {
  function setupTest(): {
    controller: SkyInstrumentationTestingController;
    fixture: ComponentFixture<CoreInstrumentationModalExample>;
    rootLoader: HarnessLoader;
  } {
    TestBed.configureTestingModule({
      imports: [CoreInstrumentationModalExample, SkyHelpTestingModule],
      providers: [provideNoopSkyAnimations(), provideSkyInstrumentationTesting()],
    });

    const fixture = TestBed.createComponent(CoreInstrumentationModalExample);

    fixture.detectChanges();

    return {
      controller: TestBed.inject(SkyInstrumentationTestingController),
      fixture,
      rootLoader: TestbedHarnessEnvironment.documentRootLoader(fixture),
    };
  }

  it('should track when a user requests help from the edit gift modal', async () => {
    const { controller, fixture, rootLoader } = setupTest();

    const launchButton = (fixture.nativeElement as HTMLElement).querySelector('button');

    launchButton?.click();

    fixture.detectChanges();
    await fixture.whenStable();

    const modal = await rootLoader.getHarness(SkyModalHarness);

    await modal.clickHelpInline();

    controller.expectEvent({
      eventName: 'sky.help-inline.help-requested',
      eventDetail: { helpKey: 'edit-gift.html' },
      context: { name: 'edit-gift', detail: { recordId: '280-c-r-w' } },
    });
  });
});
```

#### launch-button.ts

```typescript
import { Component, Injector, inject } from '@angular/core';
import { provideSkyInstrumentationContextFrom } from '@skyux/core';
import { SkyModalService } from '@skyux/modals';

import { CoreInstrumentationModalContent } from './modal';

@Component({
  selector: 'app-core-instrumentation-modal-launch-button',
  template: ` <button class="sky-btn sky-btn-default" type="button" (click)="openModal()">Edit gift</button> `,
})
export class CoreInstrumentationModalLaunchButton {
  readonly #injector = inject(Injector);
  readonly #modalSvc = inject(SkyModalService);

  protected openModal(): void {
    // A modal renders outside this component's view, so the context above this
    // button must be forwarded explicitly.
    this.#modalSvc.open(CoreInstrumentationModalContent, {
      providers: provideSkyInstrumentationContextFrom(this.#injector),
    });
  }
}
```

#### modal.html

```html
<sky-modal headingText="Edit gift" helpKey="edit-gift.html">
  <sky-modal-content>
    <p>The help button in this modal reports the context from the page that opened it.</p>
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-link" type="button" (click)="modal.close()">Close</button>
  </sky-modal-footer>
</sky-modal>
```

#### modal.ts

```typescript
import { Component, inject } from '@angular/core';
import { SkyModalInstance, SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-core-instrumentation-modal-content',
  imports: [SkyModalModule],
  templateUrl: './modal.html',
})
export class CoreInstrumentationModalContent {
  protected readonly modal = inject(SkyModalInstance);
}
```
