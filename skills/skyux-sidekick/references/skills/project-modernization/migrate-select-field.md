# Migrate `sky-select-field` to `sky-lookup`

**Load this reference when:** a project imports `@skyux/select-field` or uses `<sky-select-field>`, including when getting a SKY UX 14 project ready for SKY UX 15.

SKY UX 15 removes `@skyux/select-field`. Replace every `<sky-select-field>` element and `SkySelectFieldModule` import with [`<sky-lookup>`](../../skyux/components/lookup.md) from `@skyux/lookup`, then uninstall `@skyux/select-field`.

## Critical behavior change

`sky-lookup` always exposes its value as an array, even when `selectMode="single"`. Every single-select field needs its form control type, value reads, and tests updated. Multi-select fields already use arrays.

## Workflow

Let the compiler find the templates instead of searching for them up front:

1. In each module or standalone component that imports `@skyux/select-field`, swap `SkySelectFieldModule` for `SkyLookupModule` (plus `SkyInputBoxModule` from `@skyux/forms` if you wrap in an input box). Add `AsyncPipe` where you introduce an `async` pipe.
2. Run `npx ng build`. Each `'sky-select-field' is not a known element` error names a template to fix with the rules below.
3. Repeat until the build passes. Then update single-select value handling and tests.
4. Run `npm uninstall @skyux/select-field`, then `npx ng build`, `npx ng lint`, and `npx ng test`.

## Rules

- Replace the element name and keep all `class`, `data-*`, `aria-*`, `[disabled]`, `[required]`, `[searchFilters]`, `[ariaLabel]`, and `[ariaLabelledBy]` bindings.
- On every `<sky-lookup>`, set `descriptorProperty` (the old `descriptorKey`, or `"label"` if it wasn't set), `idProperty="id"`, and `enableShowMore`.
- If `[data]` was bound to an `Observable`, bind `[data]="(stream | async) ?? []"`.
- Add `SkyLookupModule` and `SkyInputBoxModule` only to the modules or standalone components that render a migrated template.

### Attribute mapping

| `sky-select-field`             | `sky-lookup`                                                  |
| ------------------------------ | ------------------------------------------------------------- |
| `descriptorKey`                | `descriptorProperty`                                          |
| `singleSelectPlaceholderText`  | `placeholderText`                                             |
| `multipleSelectOpenButtonText` | `placeholderText`                                             |
| `showAddNewRecordButton`       | `showAddButton`                                               |
| `(addNewRecordButtonClick)`    | `(addClick)`                                                  |
| `pickerHeading="..."`          | `[showMoreConfig]="{ nativePickerConfig: { title: '...' } }"` |
| `[customPicker]="ref"`         | `[showMoreConfig]="{ customPicker: ref }"`                    |
| All other inputs and outputs   | Same name                                                     |

Define `showMoreConfig` inline in the template, not as a TypeScript property. Combine both keys when the original set both: `[showMoreConfig]="{ nativePickerConfig: { title: 'Select items' }, customPicker: myPicker }"`. A resource string works as the title: `{ title: ('select_items' | skyAppResources) }`.

### When to wrap in `<sky-input-box>`

Wrap only when the original had a static label next to the field that reduces to a plain string.

| Original label                                        | Wrap in [`sky-input-box`](../../skyux/components/input-box.md)?            |
| ----------------------------------------------------- | -------------------------------------------------------------------------- |
| `<label class="sky-control-label">Department</label>` | Yes. Set `labelText="Department"` and `stacked`, and delete the `<label>`. |
| `[ariaLabelledBy]` pointing at a separate element     | No. Keep the label markup and bind `ariaLabelledBy` on `sky-lookup`.       |
| Conditional label (`@if`, `*ngIf`, ternary)           | No. Keep the label markup.                                                 |
| `[ariaLabel]` only, no visible label                  | No.                                                                        |

When you wrap, add `data-sky-id="<field-id>"` to the input box so tests can find it with `SkyInputBoxHarness`.

```html
<!-- Before -->
<label class="sky-control-label">Department</label>
<sky-select-field formControlName="department" [data]="dataStream"> </sky-select-field>

<!-- After -->
<sky-input-box labelText="Department" stacked data-sky-id="department-field">
  <sky-lookup
    formControlName="department"
    [data]="(dataStream | async) ?? []"
    descriptorProperty="label"
    idProperty="id"
    enableShowMore
  />
</sky-input-box>
```

## Single-select value changes

Change every form control type from `FormControl<T | null>` to `FormControl<T[]>`, every initial value to an array, and every read to `value?.[0]`.

```typescript
// Before
department = new FormControl<Department | null>(null);

onSelectionChange(value: Department | undefined): void {
  if (value) {
    this.load(value.id);
  }
}

// After
department = new FormControl<Department[]>([]);

onSelectionChange(value: Department[] | undefined): void {
  const selected = value?.[0];
  if (selected) {
    this.load(selected.id);
  }
}
```

- For template-driven forms, make the bound property an array. Add a getter for the single value only if existing call sites need it.
- Custom validators on a single-select field read `control.value?.[0]?.property` instead of `control.value?.property`. Validators that check array length need no change.
- Keep `updateOn: 'blur'` where async validators depend on blur timing.

## Tests

For every spec that renders a migrated component:

1. Add `SkyLookupModule` (and `SkyInputBoxModule` when used) to the TestBed `imports`. Do not use `CUSTOM_ELEMENTS_SCHEMA`.
2. Add `provideNoopSkyAnimations()` from `@skyux/core` to the providers. Without it, lookup tests are flaky or time out.
3. For single-select fields, change `toBe(obj)` / `toEqual(obj)` to `toEqual([obj])`.
4. Replace `querySelector('.sky-control-label')` reads with `SkyInputBoxHarness` from `@skyux/forms/testing`:

   ```typescript
   const harness = await loader.getHarness(SkyInputBoxHarness.with({ dataSkyId: 'department-field' }));
   expect(await harness.getLabelText()).toBe('Department');
   ```

   For resource-string labels, use `toEqualResourceText` from `@skyux-sdk/testing`; see [Jasmine matchers](../../skyux/learn/develop/testing/jasmine-matchers.md).

## Done when

- `npx ng build`, `npx ng lint`, and `npx ng test` pass.
- No `sky-select-field` or `SkySelectFieldModule` remains under `src/`, and `@skyux/select-field` is gone from `package.json`.
- Every `<sky-lookup>` has `descriptorProperty`, `idProperty`, and `enableShowMore`.
- Every single-select control is typed `T[]` and every read uses `value[0]`.
