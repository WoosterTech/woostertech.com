---
title: DialogResult and the Cancel Button
date: 2021-05-19T21:12:58.000Z
author: authors/karl.md
draft: false
heroHeading: DialogResult and the Cancel Button
heroSubHeading: Issues with C# dialogs
heroBackground: blog/DialogResult.png
---

Cancel buttons can be an important part of working with forms. If no `DialogResult` is set, the form will close but the calling code will continue unhindered.

To work properly, both the `OK` and `Cancel` actions should be set.

First, make sure to be getting a result from the form:

```csharp
Form userSelect = new UserSelectForm();
DialogResult userResult = userSelect.ShowDialog();
```

For cancel or close, the `FormClosed` trigger can be used with a simple 'return':

```csharp
private void UserSelectForm_FormClosed(object sender, FormClosedEventArgs e)
{
    return;
}
```

Setting the `CancelButton` property will effectively perform the same action.

For `OK`, use something like this:

```csharp
private void okButton_Click(object sender, EventArgs e)
{
    DialogResult = DialogResult.OK;
    this.Close();
}
```

Once outside the form, make sure to do a check, like this (or check for `OK`, either way):

```csharp
if (userResult == DialogResult.Cancel)
{
    return;
}
```

By doing this, I can leave the method that I'm in without having to do anything else special. By setting the `OK` status appropriately, I can also make sure that the rest of the code operates.
