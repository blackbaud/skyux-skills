# Replace Label Components Removed in SKY UX 15

**Load this reference when:** a project uses `<sky-box-header>`, `<sky-file-attachment-label>`, `<sky-modal-header>`, or `<sky-toggle-switch-label>`, including when getting a SKY UX 14 project ready for SKY UX 15.

SKY UX 15 deletes these projected-content components. Replace every usage with the `headingText` or `labelText` input on its parent. The replacements already exist in SKY UX 14, so migrate before updating.

| Removed component             | Replacement                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `<sky-box-header>`            | `headingText` on [`<sky-box>`](../../skyux/components/box.md)                       |
| `<sky-file-attachment-label>` | `labelText` on [`<sky-file-attachment>`](../../skyux/components/file-attachment.md) |
| `<sky-modal-header>`          | `headingText` on [`<sky-modal>`](../../skyux/components/modal.md)                   |
| `<sky-toggle-switch-label>`   | `labelText` on [`<sky-toggle-switch>`](../../skyux/components/toggle-switch.md)     |

**Every usage must be migrated, and a replacement always exists.** A leftover usage breaks the SKY UX 15 build. Do not leave a `TODO` or a commented-out usage. The migration is done when none of these tags remain in any `.html` file or inline template.

`<sky-select-field>` is also removed in SKY UX 15. See [Migrate `sky-select-field` to `sky-lookup`](./migrate-select-field.md).

## Lifting the projected content

Reduce the projected markup to a single string and bind it to the parent's input.

| Projected content                                     | Use                                                          |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| Plain text: `<sky-box-header>Donors</sky-box-header>` | `headingText="Donors"`                                       |
| Interpolation: `{{ title }}`                          | `[headingText]="title"`                                      |
| Resource pipe: `{{ 'box_title' \| skyAppResources }}` | `[headingText]="'box_title' \| skyAppResources"`             |
| Text wrapped in `<h2>`, `<strong>`, `<span>`, etc.    | Lift the visible text; drop the wrapper element              |
| Text plus `<sky-help-inline>`                         | Lift the text; migrate the help inline per the section below |
| `@if` / `*ngIf` around the content                    | Lift the expression: `[headingText]="condition ? 'A' : 'B'"` |

### When the markup doesn't reduce cleanly

When the header projects a button, link, icon, status indicator, or nested component alongside the text:

1. Lift the user-visible text into `headingText` / `labelText`.
2. Check the component's design guidelines for a supported home for the leftover markup. Headings and labels are text-only, so actions usually have another slot — for example, `<sky-box-controls>` holds a box's action menu.
3. Move the leftover markup there. If the guidelines offer nothing, place it as a sibling of the parent so it stays visible and reachable.
4. Delete markup that is purely decorative or whose meaning the lifted text already carries.

List each of these decisions in your plan so the user can confirm them.

### Heading level, style, and hidden labels

- `<sky-box>` renders `headingText` as an `<h2>` at heading style 2. If the original markup used a different heading element or style, preserve it with `headingLevel` and `headingStyle`.
- `<sky-modal>` has no `headingLevel` input. Drop any heading element that wrapped the modal header text.
- If the original label was visually hidden but read by screen readers, use `labelHidden` on `<sky-file-attachment>` or `<sky-toggle-switch>`, or `headingHidden` on `<sky-box>`.
- `headingHidden` on `<sky-box>` also removes the box's help inline button. When the box needs both a hidden heading and a help button, keep the heading visible.
- `labelText` on `<sky-toggle-switch>` takes precedence over `[ariaLabel]`. Delete the redundant `ariaLabel`, or fold any extra context it carried into `labelText`.

## Migrating a projected `<sky-help-inline>`

All four parents expose `helpPopoverContent`, `helpPopoverTitle`, and `helpKey`. Move the help inline's configuration onto the parent and delete the `<sky-help-inline>` element.

| `<sky-help-inline>` binding | Parent binding                                                      |
| --------------------------- | ------------------------------------------------------------------- |
| `popoverContent`            | `helpPopoverContent`                                                |
| `popoverTitle`              | `helpPopoverTitle`                                                  |
| `helpKey`                   | `helpKey`                                                           |
| `labelText`, `ariaLabel`    | None. The parent passes its own heading or label text. Delete them. |
| `(actionClick)`             | None. See [The `actionClick` output](#the-actionclick-output).      |

- `helpPopoverContent` and `helpKey` only take effect when `headingText` / `labelText` is set, so lift the text in the same edit.
- **Set `helpPopoverContent` or `helpKey`, never both.** `helpKey` wins when both are set, so if the original set both, keep the key.
- If an `@if` / `*ngIf` guarded the help inline, fold the condition into the binding: `[helpPopoverContent]="showHelp ? content : undefined"`.
- Only migrate help inlines projected inside a removed component. Leave every other `<sky-help-inline>` alone.

```html
<!-- Before -->
<sky-box>
  <sky-box-header>
    Donor summary
    <sky-help-inline
      labelText="Donor summary"
      popoverTitle="Donor summary"
      popoverContent="Totals for the selected date range."
    />
  </sky-box-header>
  <sky-box-content>...</sky-box-content>
</sky-box>

<!-- After -->
<sky-box
  headingText="Donor summary"
  helpPopoverTitle="Donor summary"
  helpPopoverContent="Totals for the selected date range."
>
  <sky-box-content>...</sky-box-content>
</sky-box>
```

### The `actionClick` output

Read the `(actionClick)` handler before deleting anything. It falls into one of three cases.

**1. The handler only opens global help** (for example, `SkyHelpService.openHelp()` with a help key, and nothing else). Delete the handler and set `helpKey` on the parent. SKY UX opens help through the application's `SkyHelpService`; see [Global help](../../skyux/learn/develop/global-help.md).

```html
<!-- Before -->
<sky-modal>
  <sky-modal-header>
    Manage signatures
    <sky-help-inline (actionClick)="onHelpClicked('signatures')" />
  </sky-modal-header>
</sky-modal>

<!-- After -->
<sky-modal headingText="Manage signatures" helpKey="signatures"></sky-modal>
```

**2. The handler logs analytics.** Delete the handler and the binding, and move the logging into a [`SkyInstrumentationListener`](../../skyux/components/instrumentation.md). The parent renders `sky-help-inline` internally, which emits `sky.help-inline.help-requested` on every click.

```ts
@Injectable()
export class AppInstrumentationListener implements SkyInstrumentationListener {
  readonly #analytics = inject(AnalyticsService);

  public handleEvent(evt: SkyInstrumentationEvent): void {
    if (evt.eventName === 'sky.help-inline.help-requested' && evt.context?.name === 'smart-feature-performance') {
      this.#analytics.logHelpRequested(evt.context.detail);
    }
  }
}
```

Register it once in the application config with `provideSkyInstrumentationListener(AppInstrumentationListener)`, not on a component, so lazy-loaded routes reach it. If the application already registers a listener, add a branch to it.

A listener receives every help inline event in the application, so always match on something that identifies the migrated button:

- **Migrated to `helpKey`:** match `evt.eventDetail?.['helpKey']` when the key is unique to that button.
- **Migrated to `helpPopoverContent`, or the key is shared:** add `[skyInstrumentationContext]="{ name: 'smart-feature-performance' }"` to the parent, match `evt.context?.name`, and pass the old handler's arguments in `detail`. Import `SkyInstrumentationContext` from `@skyux/core`. Add the context only when the listener can't otherwise tell which button fired.

Two more rules:

- The event fires on every click, including the one that closes an open popover. If the old handler counted help usage, tell the user the figures are not directly comparable.
- Never open help from a listener. With `helpKey` set, SKY UX already opens it.

**3. The handler routes help through a caller-supplied callback**, such as an optional `onHelpKeyClicked` on a modal context. This decides where help opens, so move it into a `SkyHelpService` subclass provided on the host component:

```ts
@Injectable()
export class RecordHelpService extends SkyHelpService {
  readonly #context = inject(RecordModalContext);
  readonly #helpWidget = inject(HelpWidgetService);

  public openHelp(args?: SkyHelpOpenArgs): void {
    if (!args) {
      return;
    }

    if (this.#context.onHelpKeyClicked) {
      this.#context.onHelpKeyClicked(args.helpKey);
    } else {
      this.#helpWidget.open(args);
    }
  }

  public updateHelp(): void {
    /* Intentionally empty. */
  }
}
```

`HelpWidgetService` stands in for whatever the old handler's fallback called. Provide the subclass on the host component, alias `SkyHelpService` to it, set `helpKey` on the parent, and delete the old handler. Keep the subclass internal; do not export it from a library's public API.

```ts
providers: [
  RecordHelpService,
  { provide: SkyHelpService, useExisting: RecordHelpService },
],
```

## Component cleanup

- Remove `SkyHelpInlineModule` when no `<sky-help-inline>` remains in the scope that imports it. For an NgModule, check every component it declares first.
- Remove members that only supported the deleted markup, every `(actionClick)` handler, and any service the component no longer uses.
- Keep `SkyBoxModule`, `SkyModalModule`, `SkyFileAttachmentsModule`, and `SkyToggleSwitchModule`.

## Tests

- Update specs that queried the removed components' DOM in the same pass. Assert the heading or label through the parent's harness.
- Call `clickHelpInline()` before `getHelpPopoverContent()` or `getHelpPopoverTitle()`. Those getters read the open popover and fail while it is closed.
- The help popover getters reject when the parent renders no help button. Assert absence with `toBeRejectedWithError()`, not `toBeResolvedTo(undefined)`.
- Replace coverage of an analytics `(actionClick)` handler with an instrumentation assertion. Add `provideSkyInstrumentationTesting()` from `@skyux/core/testing` to the TestBed providers (it returns `EnvironmentProviders`, so widen a `Provider[]` annotation), click with the harness's `clickHelpInline()`, then assert:

  ```ts
  TestBed.inject(SkyInstrumentationTestingController).expectEventCount(
    { eventName: 'sky.help-inline.help-requested' },
    1,
  );
  ```
