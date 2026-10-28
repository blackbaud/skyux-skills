---
Title: Manage data
Reference: https://developer.blackbaud.com/skyux/design/guidelines/managing-records
---

# Manage data

When users users need to add, edit, or delete data, follow these SKY UX patterns for the consistent placement and behavior of actions.

## Add data

### Add items from a list

When users can create items from lists or add existing items to lists, display a **New** or **Add** button in the list toolbar to open a [modal form](../../components/modal.md). For guidance on which label to use, see the SKY UX terminology guidelines.

![Button to add a record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/list-add.1bc3418d.png)

### Add another item

When users need to add multiple items in sequence, such as multiple instances of a record with just a few fields on an inline form, display a **New** or **Add** button below the list. Display new items at the end of the list above the button. This scenario is most common for adding multiple child items, such as phone numbers.

![Button to add another](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/repeater-add-another.16cab169.png)

### Add from a search

Sometimes records must reference other records, such as when donations reference donors. If the records to reference don't exist, users can add them on the fly. Users should search first to avoid duplicate records, and if they confirm that the records don't exist, they can invoke add forms. Use the [lookup text input](../../components/lookup.md) when users need to add items during a search.

### Add child items

On [record pages](./page-layouts/README.md), users can add child items, such as contact information, relationships, and notes. While they can sometimes add child items on the forms where they create the parent records, they also need to add and edit child items from those parent record pages. The placement of those add and edit actions depends on the [content containers](./content-containers.md).

![Adding child information](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/add-child-record.c97cffb0.png)

## Edit data

### Edit items from a list

In lists where users can edit items and perform other actions, display [context menus](../../components/dropdown.md) to the left of list items. For complex items, users may only be able to edit core information and may need to go to record pages to edit ancillary information.

![Edit record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/grid-row-edit-2.9b84c69d.png)

![Edit record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/repeater-edit-2.3eab649e.png)

In lists where users can edit items but can't perform other actions, display edit buttons instead of context menus.

![Edit record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/grid-row-edit.c919b4fc.png)

![Edit record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/repeater-edit.8fb26d71.png)

### Edit from record pages

#### Simple records

For simple records, allow users to edit data from the page actions area.

If edit buttons appear directly in the page actions area, display edit icons on the buttons.

![Edit core information from a record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-edit-in-toolbar.9ffa2ace.png)

If edit buttons appear in dropdowns in the page actions area, don't display edit icons.

![Edit core information from a record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-edit-in-menu.45be5c9c.png)

#### Complex records and boxes

When records are too complex to edit in a single form, organize data into boxes on the record pages to let users edit smaller sets of data. Boxes are also useful to present data in a non-list format in other scenarios.

To enable users to edit the data in a box, display a borderless icon button (`sky-btn sky-btn-icon-borderless`) in the top right. If they can also perform other actions, display the actions in a [context menu](../../components/dropdown.md) instead. Use the same edit form for all fields in a box, and don't mix editable and non-editable data to help set user expectations.

![Edit non-list-based information](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/edit-box.32f25b0e.png)

## Remove data

### Delete data

#### Delete or remove items from a list

In lists where the items are not systemically important and the cost to re-create them is low, you can allow users to delete items. You can also allow users to remove items from lists without deleting the items. If users can also perform other actions on list items, display delete or remove actions in [context menus](../../components/dropdown.md) to the left of each item.

When users can delete or remove items from lists, display a **Delete** or **Remove** action in the dropdown menu. For guidance on which label to use, see the SKY UX terminology guidelines.

![Delete record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/delete-grid-row.a640402d.png)

If users can delete items but can't perform other actions, display delete buttons instead of context menus.

![Delete record from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/delete-grid-row.a640402d.png)

#### Delete record pages

You can allow users to delete systemically important records from the [record pages](./page-layouts/README.md). Place delete actions in dropdowns instead of directly in the page actions area to provide an extra step to prevent users from accidentally deleting records. Deleting important records should be rare, so the extra step is not costly.

Display a [confirmation dialog](../../components/confirm.md) before removing data.

![Delete record from the record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-delete-in-menu.ed54a177.png)

### Mark records inactive

Sometimes data needs to be preserved beyond active usefulness for audit or historical purposes. This action is reversible, so you can let users access it from lists even for systemically important records.

#### Mark records inactive from a list

![Mark a record inactive from a list](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/mark-inactive-grid-row.ad55189b.png)

#### Mark records inactive from a record page

On record pages, display **Mark inactive** buttons in dropdowns instead of directly in the page actions areas.

![Mark a record inactive from the record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-inactive-in-menu.c4c7495f.png)

![Mark a record inactive from the record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-inactive-in-more.8a8854b5.png)

For inactive records, indicate the status in the page summary and display the **Mark active** button in a dropdown in the page actions area.

![Mark a record active from the record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-active-in-menu.c22021e0.png)

![Mark a record active from the record page](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/managingrecords/record-page-active-in-more.fdf979dd.png)
