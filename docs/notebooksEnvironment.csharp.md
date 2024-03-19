# `notebooksEnvironment` Submodule <a name="`notebooksEnvironment` Submodule" id="@cdktf/provider-google.notebooksEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksEnvironment <a name="NotebooksEnvironment" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment google_notebooks_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironment(Construct Scope, string Id, NotebooksEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage"></a>

```csharp
private void PutContainerImage(NotebooksEnvironmentContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(NotebooksEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage"></a>

```csharp
private void PutVmImage(NotebooksEnvironmentVmImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage"></a>

```csharp
private void ResetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotebooksEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotebooksEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotebooksEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage"></a>

```csharp
public NotebooksEnvironmentContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts"></a>

```csharp
public NotebooksEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage"></a>

```csharp
public NotebooksEnvironmentVmImageOutputReference VmImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput"></a>

```csharp
public NotebooksEnvironmentContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput"></a>

```csharp
public NotebooksEnvironmentVmImage VmImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksEnvironmentConfig <a name="NotebooksEnvironmentConfig" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    NotebooksEnvironmentContainerImage ContainerImage = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string PostStartupScript = null,
    string Project = null,
    NotebooksEnvironmentTimeouts Timeouts = null,
    NotebooksEnvironmentVmImage VmImage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#id NotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#location NotebooksEnvironment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#name NotebooksEnvironment#name}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage"></a>

```csharp
public NotebooksEnvironmentContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#container_image NotebooksEnvironment#container_image}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#description NotebooksEnvironment#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#display_name NotebooksEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#id NotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#post_startup_script NotebooksEnvironment#post_startup_script}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts"></a>

```csharp
public NotebooksEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#timeouts NotebooksEnvironment#timeouts}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage"></a>

```csharp
public NotebooksEnvironmentVmImage VmImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#vm_image NotebooksEnvironment#vm_image}

---

### NotebooksEnvironmentContainerImage <a name="NotebooksEnvironmentContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentContainerImage {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#repository NotebooksEnvironment#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#tag NotebooksEnvironment#tag}

---

### NotebooksEnvironmentTimeouts <a name="NotebooksEnvironmentTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#create NotebooksEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#delete NotebooksEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#update NotebooksEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#create NotebooksEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#delete NotebooksEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#update NotebooksEnvironment#update}.

---

### NotebooksEnvironmentVmImage <a name="NotebooksEnvironmentVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentVmImage {
    string Project,
    string ImageFamily = null,
    string ImageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project">Project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily">ImageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName">ImageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}

---

##### `ImageFamily`<sup>Optional</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily"></a>

```csharp
public string ImageFamily { get; set; }
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#image_family NotebooksEnvironment#image_family}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/notebooks_environment#image_name NotebooksEnvironment#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksEnvironmentContainerImageOutputReference <a name="NotebooksEnvironmentContainerImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue"></a>

```csharp
public NotebooksEnvironmentContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---


### NotebooksEnvironmentTimeoutsOutputReference <a name="NotebooksEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksEnvironmentVmImageOutputReference <a name="NotebooksEnvironmentVmImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksEnvironmentVmImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily">ResetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageFamily` <a name="ResetImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily"></a>

```csharp
private void ResetImageFamily()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName"></a>

```csharp
private void ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput">ImageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily">ImageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageFamilyInput`<sup>Optional</sup> <a name="ImageFamilyInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput"></a>

```csharp
public string ImageFamilyInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ImageFamily`<sup>Required</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily"></a>

```csharp
public string ImageFamily { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue"></a>

```csharp
public NotebooksEnvironmentVmImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---



