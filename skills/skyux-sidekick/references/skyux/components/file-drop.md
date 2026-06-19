---
Title: File drop
Reference: https://developer.blackbaud.com/skyux/components/file-drop
---

# File drop

The file drop element lets users attach multiple local files or link to external files, and it displays summary information about the attachments.

## Usage

### Use when

Use the file drop element when users need to upload multiple files or attach files from URLs rather than from local devices.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/use-multi.c01a33e902554ca64b00866d1d7e0b26.png)

Do use a file drop element to upload more than one file.

Use the file drop element when users need to add metadata about uploaded files.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/use-metadata.4be46c9f5ba23d84f61c37d44b30550b.png)

Do use a file drop element to add metadata about uploaded files.

### Don't use when

Don't use the file drop element when users only need to upload a single local file. Use the [file attachment component](./file-attachment.md) instead.

## Anatomy

1

Label

2

Option to upload local files

3

File name

4

File size

5

File preview

6

Delete button

7

Required field marker (optional)

8

Help inline button (optional)

9

Option to link to external files (optional)

10

Hint text (optional)

11

User-entered metadata (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/anatomy.a3a96f9179ea916d3c36c5a02cf63757.png)

## Options

### Required field marker

When a file drop input is required, a red asterisk appears to the right of the label. It includes the appropriate ARIA attributes to support users of assistive technologies. For more information about required fields, see the [form design guidelines](../design/guidelines/form-design.md#validation-and-error-handling).

### Help inline button

When you need to supplement a file drop label with additional information but don't require persistent inline help, you can place a [help inline button](./help-inline.md) beside the label to invoke contextual user assistance.

### Link to external files

You can indicate whether to include the option to attach external files using their URLs.

### Hint text

To highlight important considerations about a file drop input, use hint text. This persistent inline help can explain details such as:

- The correct format
- Any constraints on the input
- Additional instructions or context, such as how data is used

### Stacked margin

For consistent vertical spacing when a file drop input is immediately followed by another form input, use `stacked` to add a bottom margin that visually separates the file drop input from the form input under it. For more information about spacing on forms, see the [form layout guidelines](../design/guidelines/form-design.md#form-layout).

Don't use `stacked` when the file drop:

- Is the last input before a [field group](./field-group.md)
- Is the last input on a form
- Is followed by one or more conditional fields (use `sky-theme-margin-bottom-s` instead for closely related fields)

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/options-stacked.024ad5be28990b2b46d8d328f6ddda3d.png)

### Metadata

You can include inputs for users to add metadata about file attachments.

### Validation

You can specify parameters for valid files, including file types, minimum and maximum sizes, and custom validation.

## Behavior and states

### File information

After users attach files, summary information appears below the file drop options. For local files, the default summary includes the file name, file size, file preview, and a delete button. For external files, the default summary includes the URL and a delete button. You can include additional inputs to display user-entered metadata.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/behavior-preview.857c6273dd7e820eec8fca5a981a9bcd.png)

### Responsiveness

The file drop element switches to a vertical layout in smaller viewports.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/file-attach/behavior-responsive.26059504579953417c202b84ac811b35.png)

## Related information

### Components

- [Field group](./field-group.md)
- [Help inline button](./help-inline.md)
- [File attachment](./file-attachment.md)

### Guidelines

- [Form design](../design/guidelines/form-design.md)

## Installation

NPM package

`@skyux/forms`[View in NPM](https://www.npmjs.com/package/@skyux/forms) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/forms/src/lib/modules/file-attachment/file-drop/file-drop.module.ts#L12)

Install with NPM

`npm install --save-exact @skyux/forms`

## SkyFileDropModule

Type: Module

`import { SkyFileDropModule } from '@skyux/forms';`

## SkyFileDropComponent

Type: Component

Selector: `sky-file-drop`

Provides an element to attach multiple files where users can browse or drag and drop local files or provide hyperlinks to external files. You can leave the contents of the component blank to display the drop zone's default UI, or you can specify custom content to display instead. When the module initializes, it disables the ability to drag and drop files for the entire window to prevent the browser from opening files that are accidentally dropped outside the target zone. If you implement your own file drop functionality outside of the file drop component, you can place the `sky-file-drop-target` CSS class on the element that receives drop events to exempt it from the drop exclusion rule.

### Inputs

#### `acceptedTypes: string | undefined`

Required

The comma-delimited string literal of MIME types that users can attach. By default, all file types are allowed.

#### `acceptedTypesErrorMessage: string | undefined`

A custom error message to display when a file doesn't match the accepted types. This replaces a default error message that lists all accepted types.

#### `allowLinks: boolean | undefined`

Whether to display the option to attach files from URLs rather than from local devices.

Default: `false`

#### `fileUploadAriaLabel: string | undefined`

The ARIA label for the file upload button. This provides a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

Default: `"Drag a file here or click to browse"`

#### `helpKey: string | undefined`

A help key that identifies the global help content to display. When specified along with `labelText`, a [help inline](./help-inline.md) button is placed beside the file attachment label. Clicking the button invokes [global help](../learn/develop/global-help.md) as configured by the application. This property only applies when `labelText` is also specified.

#### `helpPopoverContent: string | TemplateRef<unknown> | undefined`

The content of the help popover. When specified along with `labelText`, a [help inline](./help-inline.md) button is added to the file attachment label. The help inline button displays a [popover](./popover.md) when clicked using the specified content and optional title. This property only applies when `labelText` is also specified.

#### `helpPopoverTitle: string | undefined`

The title of the help popover. This property only applies when `helpPopoverContent` is also specified.

#### `hintText: string | undefined`

[Persistent inline help text](../design/guidelines/user-assistance.md#inline-help) that provides additional context to the user.

#### `labelHidden: boolean`

Whether to hide `labelText` from view.

Default: `false`

#### `labelText: string | undefined`

The text to display as the file attachment's label.

#### `linkUploadAriaLabel: string | undefined`

The ARIA label for the link upload input. This sets the button's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

Default: `"Link to a file"`

#### `linkUploadHintText: string | undefined`

The hint text for the link upload input.

#### `maxFileSize: number`

The maximum size in bytes for valid files.

Default: `500000`

#### `minFileSize: number`

The minimum size in bytes for valid files.

Default: `0`

#### `multiple: boolean | undefined`

Whether users can drag and drop multiple files at the same time.

Default: `true`

#### `noClick: boolean | undefined`

Whether to disable the option to browse for files to attach.

Default: `false`

#### `required: boolean`

Whether uploading a file or link is required. When you set this property to `true`, the component adds `aria-required` and `required` attributes to the input elements so that screen readers announce an invalid state until the input element is complete. For more information about the `aria-required` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-required).

Default: `false`

#### `stacked: boolean`

Whether the file attachment is stacked on another form component. When specified, the appropriate vertical spacing is automatically added to the file attachment.

Default: `false`

#### `validateFn: SkyFileValidateFn | undefined`

The custom validation function. This validation runs alongside the internal file validation. This function takes a `SkyFileItem` object as a parameter. The string returned is used as the error message in multi-file attachment.

### Outputs

#### `filesChanged: EventEmitter<SkyFileDropChange>`

Fires when users add or remove files.

#### `linkChanged: EventEmitter<SkyFileLink>`

Fires when users add or remove links.

#### `linkInputBlur: EventEmitter<void>`

Fires when the link input box triggers a blur event.

## SkyFileItemComponent

Type: Component

Selector: `sky-file-item`

### Inputs

#### `fileItem: SkyFileItem | SkyFileLink | undefined`

Required

The summary information to display about file attachments. For local files, the default summary includes the file name, file size, file preview, and a delete button. For external files, the default summary includes the URL and a delete button. You can include additional inputs to display user-entered metadata.

### Outputs

#### `deleteFile: EventEmitter<SkyFileItem | SkyFileLink>`

Fires when users select the delete button for an item. The deleted item is passed to the function.

## SkyFormErrorComponent

Type: Component

Selector: `sky-form-error`

Displays default and custom form field error messages for form field components. Set `labelText` on the `SkyInputBoxComponent` to automatically display required, maximum length, minimum length, date, email, phone number, time, and URL errors. To display custom errors, include `sky-form-error` elements in the `SkyInputBoxComponent`.

### Inputs

#### `errorName: string`

Required

The name of the error.

#### `errorText: string`

Required

The error message to display.

## SkyFileDropChange

Type: Interface

    interface SkyFileDropChange {
      files: SkyFileItem[];
      rejectedFiles: SkyFileItem[];
    }

### Properties

#### `files: SkyFileItem[]`

The array of files that were added or removed.

#### `rejectedFiles: SkyFileItem[]`

The array of files that were rejected.

## SkyFileLink

Type: Interface

    interface SkyFileLink {
      url: string;
    }

### Properties

#### `url: string`

The URL for the linked file.

## SkyFileItem

Type: Interface

    interface SkyFileItem {
      errorParam?: string;
      errorType?: SkyFileItemErrorType;
      file: File;
      url: string;
    }

### Properties

#### `errorParam?: string`

Additional parameters about the error that caused the file to be rejected.

#### `errorType?: SkyFileItemErrorType`

The type of error that caused the file to be rejected.

#### `file: File`

The object that was added or removed.

#### `url: string`

The [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) for the file that was added or removed.

## SkyFileItemErrorType

Type: Type alias

The type of error that was thrown.

    type SkyFileItemErrorType = "fileType" | "minFileSize" | "maxFileSize" | "validate"

## SkyFileValidateFn

Type: Type alias

Custom validation run on each file uploaded. The string returned is used as the error message in multi-file attachment.

    type SkyFileValidateFn = (file: SkyFileItem) => string | undefined

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyFileDropHarness

Type: Class

`import { SkyFileDropHarness } from '@skyux/forms/testing';`

Harness for interacting with a file drop component in tests.

### Methods

#### `clickFileDropTarget(): Promise<void>`

Clicks the file drop target.

#### Returns

`Promise<void>`

#### `clickHelpInline(): Promise<void>`

Clicks the help inline button.

#### Returns

`Promise<void>`

#### `clickLinkUploadDoneButton(): Promise<void>`

Clicks the link upload `Done` button'.

#### Returns

`Promise<void>`

#### `enterLinkUploadText(link: string): Promise<void>`

Enters text into the link upload input.

#### Parameters

##### `link: string`

#### Returns

`Promise<void>`

#### `getAcceptedTypes(): Promise<string | null>`

Gets the accepted file types.

#### Returns

`Promise<string | null>`

#### `getCustomError(errorName: string): Promise<SkyFormErrorHarness>`

Gets the custom form error.

#### Parameters

##### `errorName: string`

#### Returns

`Promise<SkyFormErrorHarness>`

#### `getFileUploadAriaLabel(): Promise<string | null>`

Gets the aria-label for the file upload button.

#### Returns

`Promise<string | null>`

#### `getHelpPopoverContent(): Promise<string | undefined>`

Gets the help inline popover content.

#### Returns

`Promise<string | undefined>`

#### `getHelpPopoverTitle(): Promise<string | undefined>`

Gets the help inline popover title.

#### Returns

`Promise<string | undefined>`

#### `getHintText(): Promise<string>`

Gets the hint text.

#### Returns

`Promise<string>`

#### `getLabelText(): Promise<string>`

Gets the label text.

#### Returns

`Promise<string>`

#### `getLinkUploadAriaLabel(): Promise<string | null>`

Gets the link upload aria-label.

#### Returns

`Promise<string | null>`

#### `getLinkUploadHintText(): Promise<string | undefined>`

Gets the link upload hint text.

#### Returns

`Promise<string | undefined>`

#### `hasCustomError(errorName: string): Promise<boolean>`

Whether a custom form error has fired.

#### Parameters

##### `errorName: string`

#### Returns

`Promise<boolean>`

#### `hasFileTypeError(): Promise<boolean>`

Whether the file type error has fired.

#### Returns

`Promise<boolean>`

#### `hasMaxFileSizeError(): Promise<boolean>`

Whether the max file size error has fired.

#### Returns

`Promise<boolean>`

#### `hasMinFileSizeError(): Promise<boolean>`

Whether the min file size error has fired.

#### Returns

`Promise<boolean>`

#### `hasRequiredError(): Promise<boolean>`

Whether the required error has fired.

#### Returns

`Promise<boolean>`

#### `hasValidateFnError(): Promise<boolean>`

Whether the validate error from the customer validation has fired.

#### Returns

`Promise<boolean>`

#### `isLabelHidden(): Promise<boolean>`

Whether label text is hidden.

#### Returns

`Promise<boolean>`

#### `isRequired(): Promise<boolean>`

Whether file drop is required.

#### Returns

`Promise<boolean>`

#### `isStacked(): Promise<boolean>`

Whether file drop has stacked enabled.

#### Returns

`Promise<boolean>`

#### `loadFile(file: File): Promise<void>`

Loads a single file. Be sure to include `provideSkyFileReaderTesting` as a provider when calling this function in tests.

#### Parameters

##### `file: File`

#### Returns

`Promise<void>`

#### `loadFiles(files: File[] | null): Promise<void>`

Loads multiple files. Be sure to include `provideSkyFileReaderTesting` as a provider when calling this function in tests.

#### Parameters

##### `files: File[] | null`

#### Returns

`Promise<void>`

#### `SkyFileDropHarness.with(filters: SkyFileDropHarnessFilters): HarnessPredicate<SkyFileDropHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFileDropHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyFileDropHarnessFilters`

#### Returns

`HarnessPredicate<SkyFileDropHarness>`

## SkyFileDropHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFileDropHarness` instances.

    interface SkyFileDropHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyFileItemHarness

Type: Class

`import { SkyFileItemHarness } from '@skyux/forms/testing';`

Harness for interacting with a file item component in tests.

### Methods

#### `clickDeleteButton(): Promise<void>`

Clicks the delete button.

#### Returns

`Promise<void>`

#### `getFileName(): Promise<string>`

Gets the file name.

#### Returns

`Promise<string>`

#### `getFileSize(): Promise<string>`

Gets the file size.

#### Returns

`Promise<string>`

#### `SkyFileItemHarness.with(filters: SkyFileItemHarnessFilters): HarnessPredicate<SkyFileItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFileItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyFileItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyFileItemHarness>`

## SkyFileItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFileItemHarness` instances.

    interface SkyFileItemHarnessFilters {
      dataSkyId?: string | RegExp;
      fileName: string;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `fileName: string`

Finds files whose file name matches this value.

## SkyFormErrorHarness

Type: Class

`import { SkyFormErrorHarness } from '@skyux/forms/testing';`

### Methods

#### `getErrorName(): Promise<string | null>`

Gets the error name.

#### Returns

`Promise<string | null>`

#### `getErrorText(): Promise<string | null>`

Gets the error text.

#### Returns

`Promise<string | null>`

#### `SkyFormErrorHarness.with(filters: SkyFormErrorHarnessFilters): HarnessPredicate<SkyFormErrorHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFormErrorHarness` that meets certain criteria

#### Parameters

##### `filters: SkyFormErrorHarnessFilters`

#### Returns

`HarnessPredicate<SkyFormErrorHarness>`

## SkyFormErrorHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFormErrorHarness` instances.

    interface SkyFormErrorHarnessFilters {
      dataSkyId?: string | RegExp;
      errorName?: string;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `errorName?: string`

The name of the error.

## provideSkyFileAttachmentTesting

Type: Function

Provides mocks for file attachment testing.

### Example

    TestBed.configureTestingModule({

    function provideSkyFileAttachmentTesting(): Provider[]

## Code Examples

### File drop with basic setup

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SkyFileDropModule, SkyFileItem, SkyFileLink } from '@skyux/forms';
import { SkyStatusIndicatorModule } from '@skyux/indicators';

/**
 * Demonstrates how to create a custom validator function for your form control.
 */
function customValidator(
  control: AbstractControl<(SkyFileItem | SkyFileLink)[] | null | undefined>,
): ValidationErrors | null {
  if (control.value !== undefined && control.value !== null) {
    if (control.value.length > 3) {
      return { maxNumberOfFilesReached: true };
    }
  }
  return null;
}

/**
 * @title File drop with basic setup
 */
@Component({
  selector: 'app-forms-file-drop-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyFileDropModule, SkyStatusIndicatorModule, FormsModule, ReactiveFormsModule],
})
export class FormsFileDropBasicExampleComponent {
  protected acceptedTypes = 'image/png,image/jpeg';
  protected hintText = 'Upload up to 3 files under 50MB.';
  protected inlineHelpContent =
    'Your logo appears in places such as authentication pages, student and parent portals, and extracurricular home pages.';
  protected labelText = 'Logo image';
  protected maxFileSize = 5242880;
  protected stacked = 'true';

  public fileDrop = new FormControl<(SkyFileItem | SkyFileLink)[] | null | undefined>(undefined, [
    Validators.required,
    customValidator,
  ]);
  public formGroup: FormGroup = inject(FormBuilder).group({
    fileDrop: this.fileDrop,
  });

  protected deleteFile(file: SkyFileItem | SkyFileLink): void {
    const index = this.fileDrop.value?.indexOf(file);

    if (index !== undefined && index !== -1) {
      this.fileDrop.value?.splice(index, 1);
      /*
        If you are adding custom validation through the form control,
        be sure to include this line after deleting a file from the form.
      */
      this.fileDrop.updateValueAndValidity();
    }
    // To ensure that empty arrays throw required errors, include this check.
    if (this.fileDrop.value?.length === 0) {
      this.fileDrop.setValue(null);
    }
  }

  protected validateFile(file: SkyFileItem): string | undefined {
    return file.file.name.startsWith('a') ? 'Upload a file that does not begin with the letter "a"' : undefined;
  }
}
```

#### example.component.html

```html
<form [formGroup]="formGroup">
  <sky-file-drop
    data-sky-id="logo-upload"
    linkUploadHintText="Start with http:// or https://"
    formControlName="fileDrop"
    [acceptedTypes]="acceptedTypes"
    [allowLinks]="true"
    [helpPopoverContent]="inlineHelpContent"
    [hintText]="hintText"
    [labelText]="labelText"
    [maxFileSize]="maxFileSize"
    [stacked]="stacked"
    [validateFn]="validateFile"
  >
    @if (fileDrop.errors?.['maxNumberOfFilesReached']) {
    <sky-form-error errorName="maxNumberOfFilesReached" errorText="Do not upload more than 3 files." />
    }
  </sky-file-drop>
</form>

@for (file of fileDrop.value; track file) {
<sky-file-item [fileItem]="file" (deleteFile)="deleteFile($event)" />
}
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { SkyFileItem, SkyFileLink } from '@skyux/forms';
import { SkyFileDropHarness, SkyFileItemHarness, provideSkyFileAttachmentTesting } from '@skyux/forms/testing';

import { FormsFileDropBasicExampleComponent } from './example.component';

describe('Basic file drop example', () => {
  async function setupTest(options: { dataSkyId: string }): Promise<{
    harness: SkyFileDropHarness;
    formControl: FormControl<(SkyFileItem | SkyFileLink)[] | null | undefined>;
    loader: HarnessLoader;
  }> {
    TestBed.configureTestingModule({
      providers: [provideSkyFileAttachmentTesting()],
    });
    const fixture = TestBed.createComponent(FormsFileDropBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const harness = await loader.getHarness(SkyFileDropHarness.with({ dataSkyId: options.dataSkyId }));

    fixture.detectChanges();
    await fixture.whenStable();

    const formControl = fixture.componentInstance.fileDrop;

    return { harness, formControl, loader };
  }

  async function triggerMaxFilesReachedError(harness: SkyFileDropHarness): Promise<void> {
    // Upload 3 files and then add a link to exceed the limit
    await harness.loadFiles([
      new File([], 'validFile1', { type: 'image/png' }),
      new File([], 'validFile2', { type: 'image/png' }),
      new File([], 'validFile3', { type: 'image/png' }),
    ]);

    await harness.enterLinkUploadText('foo.bar');
    await harness.clickLinkUploadDoneButton();
    await expectAsync(harness.hasCustomError('maxNumberOfFilesReached')).toBeResolvedTo(true);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsFileDropBasicExampleComponent],
    });
  });

  it('should set initial values', async () => {
    const { harness } = await setupTest({
      dataSkyId: 'logo-upload',
    });

    await expectAsync(harness.getLabelText()).toBeResolvedTo('Logo image');
    await expectAsync(harness.getAcceptedTypes()).toBeResolvedTo('image/png,image/jpeg');
    await expectAsync(harness.getHintText()).toBeResolvedTo('Upload up to 3 files under 50MB.');
    await expectAsync(harness.isStacked()).toBeResolvedTo(true);

    await expectAsync(harness.getLinkUploadHintText()).toBeResolvedTo('Start with http:// or https://');
  });

  it('should not upload invalid files starting with `a`', async () => {
    const { harness, formControl } = await setupTest({
      dataSkyId: 'logo-upload',
    });

    const filesToUpload: File[] = [
      new File([], 'aWrongFile', { type: 'image/png' }),
      new File([], 'validFile', { type: 'image/png' }),
    ];

    await harness.loadFiles(filesToUpload);

    expect(formControl.value?.length).toBe(1);
    await expectAsync(harness.hasValidateFnError()).toBeResolvedTo(true);
  });

  it('should not allow more than 3 files to be uploaded', async () => {
    const { harness, formControl, loader } = await setupTest({
      dataSkyId: 'logo-upload',
    });

    await triggerMaxFilesReachedError(harness);

    expect(formControl.value?.length).toBe(4);
    expect(formControl.valid).toBe(false);

    const validFileItemHarness = await loader.getHarness(SkyFileItemHarness.with({ fileName: 'validFile2' }));
    await validFileItemHarness.clickDeleteButton();

    expect(formControl.value?.length).toBe(3);
    expect(formControl.valid).toBe(true);
  });

  it('should set custom form error details', async () => {
    const { harness, formControl } = await setupTest({
      dataSkyId: 'logo-upload',
    });

    await triggerMaxFilesReachedError(harness);

    expect(formControl.value?.length).toBe(4);

    const customFormError = await harness.getCustomError('maxNumberOfFilesReached');

    await expectAsync(customFormError.getErrorText()).toBeResolvedTo('Do not upload more than 3 files.');
  });
});
```

### File drop with help key

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyFileDropChange, SkyFileDropModule, SkyFileItem, SkyFileLink } from '@skyux/forms';
import { SkyStatusIndicatorModule } from '@skyux/indicators';

/**
 * @title File drop with help key
 */
@Component({
  selector: 'app-forms-file-drop-help-key-example',
  templateUrl: './example.component.html',
  imports: [SkyFileDropModule, SkyStatusIndicatorModule],
})
export class FormsFileDropHelpKeyExampleComponent {
  protected acceptedTypes = 'image/png,image/jpeg';
  protected allItems: (SkyFileItem | SkyFileLink)[] = [];
  protected hintText = '5 MB maximum';
  protected labelText = 'Logo image';
  protected maxFileSize = 5242880;
  protected rejectedFiles: SkyFileItem[] = [];
  protected required = true;
  protected stacked = 'true';

  #filesToUpload: SkyFileItem[] = [];
  #linksToUpload: SkyFileLink[] = [];

  protected deleteFile(file: SkyFileItem | SkyFileLink): void {
    this.#removeFromArray(this.allItems, file);
    this.#removeFromArray(this.#filesToUpload, file);
    this.#removeFromArray(this.#linksToUpload, file);
  }

  protected onFilesChanged(change: SkyFileDropChange): void {
    this.#filesToUpload = this.#filesToUpload.concat(change.files);
    this.rejectedFiles = change.rejectedFiles;
    this.allItems = this.allItems.concat(change.files);
  }

  protected onLinkChanged(change: SkyFileLink): void {
    this.#linksToUpload = this.#linksToUpload.concat(change);
    this.allItems = this.allItems.concat(change);
  }

  protected validateFile(file: SkyFileItem): string | undefined {
    return file.file.name.startsWith('a') ? 'Upload a file that does not begin with the letter "a"' : undefined;
  }

  #removeFromArray(items: (SkyFileItem | SkyFileLink)[], obj: SkyFileItem | SkyFileLink): void {
    if (items) {
      const index = items.indexOf(obj);

      if (index !== -1) {
        items.splice(index, 1);
      }
    }
  }
}
```

#### example.component.html

```html
<sky-file-drop
  helpKey="file-help"
  linkUploadHintText="Start with http:// or https://"
  [acceptedTypes]="acceptedTypes"
  [allowLinks]="true"
  [hintText]="hintText"
  [labelText]="labelText"
  [maxFileSize]="maxFileSize"
  [required]="required"
  [stacked]="stacked"
  [validateFn]="validateFile"
  (filesChanged)="onFilesChanged($event)"
  (linkChanged)="onLinkChanged($event)"
/>
@for (file of allItems; track file) {
<div>
  <sky-file-item [fileItem]="file" (deleteFile)="deleteFile($event)" />
</div>
}
```
