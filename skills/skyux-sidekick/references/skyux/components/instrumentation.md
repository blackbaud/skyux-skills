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

`@skyux/core`[View in NPM](https://www.npmjs.com/package/@skyux/core) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/core/src/lib/modules/instrumentation/context.ts#L48)

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
