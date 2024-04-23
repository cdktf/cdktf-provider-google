# `folderAccessApprovalSettings` Submodule <a name="`folderAccessApprovalSettings` Submodule" id="@cdktf/provider-google.folderAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderAccessApprovalSettings <a name="FolderAccessApprovalSettings" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings google_folder_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettings(Construct Scope, string Id, FolderAccessApprovalSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig">FolderAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig">FolderAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices"></a>

```csharp
private void PutEnrolledServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(FolderAccessApprovalSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion"></a>

```csharp
private void ResetActiveKeyVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails"></a>

```csharp
private void ResetNotificationEmails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FolderAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FolderAccessApprovalSettings.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FolderAccessApprovalSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FolderAccessApprovalSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FolderAccessApprovalSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FolderAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FolderAccessApprovalSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FolderAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FolderAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput">FolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId">FolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```csharp
public IResolvable AncestorHasActiveKeyVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor"></a>

```csharp
public IResolvable EnrolledAncestor { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices"></a>

```csharp
public FolderAccessApprovalSettingsEnrolledServicesList EnrolledServices { get; }
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion"></a>

```csharp
public IResolvable InvalidKeyVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts"></a>

```csharp
public FolderAccessApprovalSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput"></a>

```csharp
public string ActiveKeyVersionInput { get; }
```

- *Type:* string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput"></a>

```csharp
public object EnrolledServicesInput { get; }
```

- *Type:* object

---

##### `FolderIdInput`<sup>Optional</sup> <a name="FolderIdInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput"></a>

```csharp
public string FolderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput"></a>

```csharp
public string[] NotificationEmailsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion"></a>

```csharp
public string ActiveKeyVersion { get; }
```

- *Type:* string

---

##### `FolderId`<sup>Required</sup> <a name="FolderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId"></a>

```csharp
public string FolderId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails"></a>

```csharp
public string[] NotificationEmails { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderAccessApprovalSettingsConfig <a name="FolderAccessApprovalSettingsConfig" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnrolledServices,
    string FolderId,
    string ActiveKeyVersion = null,
    string Id = null,
    string[] NotificationEmails = null,
    FolderAccessApprovalSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>object</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId">FolderId</a></code> | <code>string</code> | ID of the folder of the access approval settings. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>string[]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices"></a>

```csharp
public object EnrolledServices { get; set; }
```

- *Type:* object

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#enrolled_services FolderAccessApprovalSettings#enrolled_services}

---

##### `FolderId`<sup>Required</sup> <a name="FolderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId"></a>

```csharp
public string FolderId { get; set; }
```

- *Type:* string

ID of the folder of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#folder_id FolderAccessApprovalSettings#folder_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```csharp
public string ActiveKeyVersion { get; set; }
```

- *Type:* string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#active_key_version FolderAccessApprovalSettings#active_key_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails"></a>

```csharp
public string[] NotificationEmails { get; set; }
```

- *Type:* string[]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#notification_emails FolderAccessApprovalSettings#notification_emails}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts"></a>

```csharp
public FolderAccessApprovalSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#timeouts FolderAccessApprovalSettings#timeouts}

---

### FolderAccessApprovalSettingsEnrolledServices <a name="FolderAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsEnrolledServices {
    string CloudProduct,
    string EnrollmentLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```csharp
public string CloudProduct { get; set; }
```

- *Type:* string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):

* all
* App Engine
* BigQuery
* Cloud Bigtable
* Cloud Key Management Service
* Compute Engine
* Cloud Dataflow
* Cloud Identity and Access Management
* Cloud Pub/Sub
* Cloud Storage
* Persistent Disk

Note: These values are supported as input, but considered a legacy format:

* all
* appengine.googleapis.com
* bigquery.googleapis.com
* bigtable.googleapis.com
* cloudkms.googleapis.com
* compute.googleapis.com
* dataflow.googleapis.com
* iam.googleapis.com
* pubsub.googleapis.com
* storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#cloud_product FolderAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```csharp
public string EnrollmentLevel { get; set; }
```

- *Type:* string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#enrollment_level FolderAccessApprovalSettings#enrollment_level}

---

### FolderAccessApprovalSettingsTimeouts <a name="FolderAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#create FolderAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#update FolderAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#create FolderAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/folder_access_approval_settings#update FolderAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderAccessApprovalSettingsEnrolledServicesList <a name="FolderAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsEnrolledServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get"></a>

```csharp
private FolderAccessApprovalSettingsEnrolledServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FolderAccessApprovalSettingsEnrolledServicesOutputReference <a name="FolderAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsEnrolledServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```csharp
private void ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```csharp
public string CloudProductInput { get; }
```

- *Type:* string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```csharp
public string EnrollmentLevelInput { get; }
```

- *Type:* string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```csharp
public string CloudProduct { get; }
```

- *Type:* string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```csharp
public string EnrollmentLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FolderAccessApprovalSettingsTimeoutsOutputReference <a name="FolderAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FolderAccessApprovalSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



