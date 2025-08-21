# `projectAccessApprovalSettings` Submodule <a name="`projectAccessApprovalSettings` Submodule" id="@cdktf/provider-google.projectAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectAccessApprovalSettings <a name="ProjectAccessApprovalSettings" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings google_project_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettings(Construct Scope, string Id, ProjectAccessApprovalSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig">ProjectAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig">ProjectAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices"></a>

```csharp
private void PutEnrolledServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(ProjectAccessApprovalSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetActiveKeyVersion"></a>

```csharp
private void ResetActiveKeyVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetNotificationEmails"></a>

```csharp
private void ResetNotificationEmails()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ProjectAccessApprovalSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ProjectAccessApprovalSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ProjectAccessApprovalSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ProjectAccessApprovalSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectAccessApprovalSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList">ProjectAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference">ProjectAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```csharp
public IResolvable AncestorHasActiveKeyVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledAncestor"></a>

```csharp
public IResolvable EnrolledAncestor { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServices"></a>

```csharp
public ProjectAccessApprovalSettingsEnrolledServicesList EnrolledServices { get; }
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList">ProjectAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.invalidKeyVersion"></a>

```csharp
public IResolvable InvalidKeyVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeouts"></a>

```csharp
public ProjectAccessApprovalSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference">ProjectAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersionInput"></a>

```csharp
public string ActiveKeyVersionInput { get; }
```

- *Type:* string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServicesInput"></a>

```csharp
public object EnrolledServicesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmailsInput"></a>

```csharp
public string[] NotificationEmailsInput { get; }
```

- *Type:* string[]

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersion"></a>

```csharp
public string ActiveKeyVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmails"></a>

```csharp
public string[] NotificationEmails { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectAccessApprovalSettingsConfig <a name="ProjectAccessApprovalSettingsConfig" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnrolledServices,
    string ProjectId,
    string ActiveKeyVersion = null,
    string Id = null,
    string[] NotificationEmails = null,
    string Project = null,
    ProjectAccessApprovalSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>object</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>string[]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.project">Project</a></code> | <code>string</code> | Project id. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.enrolledServices"></a>

```csharp
public object EnrolledServices { get; set; }
```

- *Type:* object

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#enrolled_services ProjectAccessApprovalSettings#enrolled_services}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#project_id ProjectAccessApprovalSettings#project_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```csharp
public string ActiveKeyVersion { get; set; }
```

- *Type:* string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#active_key_version ProjectAccessApprovalSettings#active_key_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.notificationEmails"></a>

```csharp
public string[] NotificationEmails { get; set; }
```

- *Type:* string[]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#notification_emails ProjectAccessApprovalSettings#notification_emails}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#project ProjectAccessApprovalSettings#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.timeouts"></a>

```csharp
public ProjectAccessApprovalSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#timeouts ProjectAccessApprovalSettings#timeouts}

---

### ProjectAccessApprovalSettingsEnrolledServices <a name="ProjectAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsEnrolledServices {
    string CloudProduct,
    string EnrollmentLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```csharp
public string CloudProduct { get; set; }
```

- *Type:* string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#cloud_product ProjectAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```csharp
public string EnrollmentLevel { get; set; }
```

- *Type:* string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#enrollment_level ProjectAccessApprovalSettings#enrollment_level}

---

### ProjectAccessApprovalSettingsTimeouts <a name="ProjectAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#create ProjectAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#delete ProjectAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#update ProjectAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#create ProjectAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#delete ProjectAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/project_access_approval_settings#update ProjectAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectAccessApprovalSettingsEnrolledServicesList <a name="ProjectAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsEnrolledServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get"></a>

```csharp
private ProjectAccessApprovalSettingsEnrolledServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectAccessApprovalSettingsEnrolledServicesOutputReference <a name="ProjectAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsEnrolledServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```csharp
private void ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```csharp
public string CloudProductInput { get; }
```

- *Type:* string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```csharp
public string EnrollmentLevelInput { get; }
```

- *Type:* string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```csharp
public string CloudProduct { get; }
```

- *Type:* string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```csharp
public string EnrollmentLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectAccessApprovalSettingsTimeoutsOutputReference <a name="ProjectAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ProjectAccessApprovalSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



