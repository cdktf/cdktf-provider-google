# `notebooksRuntime` Submodule <a name="`notebooksRuntime` Submodule" id="@cdktf/provider-google.notebooksRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntime <a name="NotebooksRuntime" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime google_notebooks_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntime(Construct Scope, string Id, NotebooksRuntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig">NotebooksRuntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig">NotebooksRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig"></a>

```csharp
private void PutAccessConfig(NotebooksRuntimeAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig"></a>

```csharp
private void PutSoftwareConfig(NotebooksRuntimeSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts"></a>

```csharp
private void PutTimeouts(NotebooksRuntimeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine"></a>

```csharp
private void PutVirtualMachine(NotebooksRuntimeVirtualMachine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetSoftwareConfig"></a>

```csharp
private void ResetSoftwareConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetVirtualMachine"></a>

```csharp
private void ResetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksRuntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksRuntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksRuntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NotebooksRuntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotebooksRuntime resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotebooksRuntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotebooksRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference">NotebooksRuntimeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.healthState">HealthState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList">NotebooksRuntimeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference">NotebooksRuntimeSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference">NotebooksRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference">NotebooksRuntimeVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfig"></a>

```csharp
public NotebooksRuntimeAccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference">NotebooksRuntimeAccessConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthState`<sup>Required</sup> <a name="HealthState" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.healthState"></a>

```csharp
public string HealthState { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.metrics"></a>

```csharp
public NotebooksRuntimeMetricsList Metrics { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList">NotebooksRuntimeMetricsList</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfig"></a>

```csharp
public NotebooksRuntimeSoftwareConfigOutputReference SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference">NotebooksRuntimeSoftwareConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeouts"></a>

```csharp
public NotebooksRuntimeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference">NotebooksRuntimeTimeoutsOutputReference</a>

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachine"></a>

```csharp
public NotebooksRuntimeVirtualMachineOutputReference VirtualMachine { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference">NotebooksRuntimeVirtualMachineOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfigInput"></a>

```csharp
public NotebooksRuntimeAccessConfig AccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfigInput"></a>

```csharp
public NotebooksRuntimeSoftwareConfig SoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachineInput"></a>

```csharp
public NotebooksRuntimeVirtualMachine VirtualMachineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeAccessConfig <a name="NotebooksRuntimeAccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeAccessConfig {
    string AccessType = null,
    string RuntimeOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.accessType">AccessType</a></code> | <code>string</code> | The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.runtimeOwner">RuntimeOwner</a></code> | <code>string</code> | The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#access_type NotebooksRuntime#access_type}

---

##### `RuntimeOwner`<sup>Optional</sup> <a name="RuntimeOwner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.runtimeOwner"></a>

```csharp
public string RuntimeOwner { get; set; }
```

- *Type:* string

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#runtime_owner NotebooksRuntime#runtime_owner}

---

### NotebooksRuntimeConfig <a name="NotebooksRuntimeConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    NotebooksRuntimeAccessConfig AccessConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NotebooksRuntimeSoftwareConfig SoftwareConfig = null,
    NotebooksRuntimeTimeouts Timeouts = null,
    NotebooksRuntimeVirtualMachine VirtualMachine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.location">Location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#id NotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#project NotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#location NotebooksRuntime#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#name NotebooksRuntime#name}

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.accessConfig"></a>

```csharp
public NotebooksRuntimeAccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#access_config NotebooksRuntime#access_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#id NotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#project NotebooksRuntime#project}.

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.softwareConfig"></a>

```csharp
public NotebooksRuntimeSoftwareConfig SoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#software_config NotebooksRuntime#software_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.timeouts"></a>

```csharp
public NotebooksRuntimeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#timeouts NotebooksRuntime#timeouts}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.virtualMachine"></a>

```csharp
public NotebooksRuntimeVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#virtual_machine NotebooksRuntime#virtual_machine}

---

### NotebooksRuntimeMetrics <a name="NotebooksRuntimeMetrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeMetrics {

};
```


### NotebooksRuntimeSoftwareConfig <a name="NotebooksRuntimeSoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeSoftwareConfig {
    string CustomGpuDriverPath = null,
    object EnableHealthMonitoring = null,
    object IdleShutdown = null,
    double IdleShutdownTimeout = null,
    object InstallGpuDriver = null,
    object Kernels = null,
    string NotebookUpgradeSchedule = null,
    string PostStartupScript = null,
    string PostStartupScriptBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring">EnableHealthMonitoring</a></code> | <code>object</code> | Verifies core internal services are running. Default: True. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdown">IdleShutdown</a></code> | <code>object</code> | Runtime will automatically shutdown after idle_shutdown_time. Default: True. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout">IdleShutdownTimeout</a></code> | <code>double</code> | Time in minutes to wait before shuting down runtime. Default: 180 minutes. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | Install Nvidia Driver automatically. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.kernels">Kernels</a></code> | <code>object</code> | kernels block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule">NotebookUpgradeSchedule</a></code> | <code>string</code> | Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |

---

##### `CustomGpuDriverPath`<sup>Optional</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; set; }
```

- *Type:* string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#custom_gpu_driver_path NotebooksRuntime#custom_gpu_driver_path}

---

##### `EnableHealthMonitoring`<sup>Optional</sup> <a name="EnableHealthMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring"></a>

```csharp
public object EnableHealthMonitoring { get; set; }
```

- *Type:* object

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#enable_health_monitoring NotebooksRuntime#enable_health_monitoring}

---

##### `IdleShutdown`<sup>Optional</sup> <a name="IdleShutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdown"></a>

```csharp
public object IdleShutdown { get; set; }
```

- *Type:* object

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#idle_shutdown NotebooksRuntime#idle_shutdown}

---

##### `IdleShutdownTimeout`<sup>Optional</sup> <a name="IdleShutdownTimeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout"></a>

```csharp
public double IdleShutdownTimeout { get; set; }
```

- *Type:* double

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#idle_shutdown_timeout NotebooksRuntime#idle_shutdown_timeout}

---

##### `InstallGpuDriver`<sup>Optional</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; set; }
```

- *Type:* object

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#install_gpu_driver NotebooksRuntime#install_gpu_driver}

---

##### `Kernels`<sup>Optional</sup> <a name="Kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.kernels"></a>

```csharp
public object Kernels { get; set; }
```

- *Type:* object

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#kernels NotebooksRuntime#kernels}

---

##### `NotebookUpgradeSchedule`<sup>Optional</sup> <a name="NotebookUpgradeSchedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule"></a>

```csharp
public string NotebookUpgradeSchedule { get; set; }
```

- *Type:* string

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#notebook_upgrade_schedule NotebooksRuntime#notebook_upgrade_schedule}

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#post_startup_script NotebooksRuntime#post_startup_script}

---

##### `PostStartupScriptBehavior`<sup>Optional</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; set; }
```

- *Type:* string

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#post_startup_script_behavior NotebooksRuntime#post_startup_script_behavior}

---

### NotebooksRuntimeSoftwareConfigKernels <a name="NotebooksRuntimeSoftwareConfigKernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeSoftwareConfigKernels {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#repository NotebooksRuntime#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#tag NotebooksRuntime#tag}

---

### NotebooksRuntimeTimeouts <a name="NotebooksRuntimeTimeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#create NotebooksRuntime#create}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#delete NotebooksRuntime#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#update NotebooksRuntime#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#create NotebooksRuntime#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#delete NotebooksRuntime#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#update NotebooksRuntime#update}.

---

### NotebooksRuntimeVirtualMachine <a name="NotebooksRuntimeVirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachine {
    NotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.property.virtualMachineConfig">VirtualMachineConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | virtual_machine_config block. |

---

##### `VirtualMachineConfig`<sup>Optional</sup> <a name="VirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.property.virtualMachineConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#virtual_machine_config NotebooksRuntime#virtual_machine_config}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfig {
    NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDisk,
    string MachineType,
    NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfig = null,
    object ContainerImages = null,
    NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfig = null,
    object InternalIpOnly = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Network = null,
    string NicType = null,
    string ReservedIpRange = null,
    NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfig = null,
    string Subnet = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | data_disk block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType">MachineType</a></code> | <code>string</code> | The Compute Engine machine type used for runtimes. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages">ContainerImages</a></code> | <code>object</code> | container_images block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | If true, runtime will only have internal IP addresses. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)). |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network">Network</a></code> | <code>string</code> | The Compute Engine network to be used for machine communications. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet">Subnet</a></code> | <code>string</code> | The Compute Engine subnetwork to be used for machine communications. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags">Tags</a></code> | <code>string[]</code> | The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)). |

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#data_disk NotebooksRuntime#data_disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#machine_type NotebooksRuntime#machine_type}

---

##### `AcceleratorConfig`<sup>Optional</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#accelerator_config NotebooksRuntime#accelerator_config}

---

##### `ContainerImages`<sup>Optional</sup> <a name="ContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages"></a>

```csharp
public object ContainerImages { get; set; }
```

- *Type:* object

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#container_images NotebooksRuntime#container_images}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#encryption_config NotebooksRuntime#encryption_config}

---

##### `InternalIpOnly`<sup>Optional</sup> <a name="InternalIpOnly" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; set; }
```

- *Type:* object

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#internal_ip_only NotebooksRuntime#internal_ip_only}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#metadata NotebooksRuntime#metadata}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
* 'projects/[project_id]/regions/global/default'
  Runtimes are managed resources inside Google Infrastructure.
  Runtimes support the following network configurations:
* Google Managed Network (Network & subnet are empty)
* Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
* Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#network NotebooksRuntime#network}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#nic_type NotebooksRuntime#nic_type}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; set; }
```

- *Type:* string

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#reserved_ip_range NotebooksRuntime#reserved_ip_range}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#shielded_instance_config NotebooksRuntime#shielded_instance_config}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
* 'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#subnet NotebooksRuntime#subnet}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#tags NotebooksRuntime#tags}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
    double CoreCount = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount">CoreCount</a></code> | <code>double</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type">Type</a></code> | <code>string</code> | Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#core_count NotebooksRuntime#core_count}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#repository NotebooksRuntime#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#tag NotebooksRuntime#tag}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk {
    NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParams = null,
    string Interface = null,
    string Mode = null,
    string Source = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface">Interface</a></code> | <code>string</code> | "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode">Mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source">Source</a></code> | <code>string</code> | Specifies a valid partial or full URL to an existing Persistent Disk resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type">Type</a></code> | <code>string</code> | Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT. |

---

##### `InitializeParams`<sup>Optional</sup> <a name="InitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#initialize_params NotebooksRuntime#initialize_params}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#interface NotebooksRuntime#interface}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#mode NotebooksRuntime#mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#source NotebooksRuntime#source}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
    string Description = null,
    string DiskName = null,
    double DiskSizeGb = null,
    string DiskType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description">Description</a></code> | <code>string</code> | Provide this property when creating the disk. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName">DiskName</a></code> | <code>string</code> | Specifies the disk name. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType">DiskType</a></code> | <code>string</code> | The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this disk. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#description NotebooksRuntime#description}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName"></a>

```csharp
public string DiskName { get; set; }
```

- *Type:* string

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#disk_name NotebooksRuntime#disk_name}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#disk_size_gb NotebooksRuntime#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#disk_type NotebooksRuntime#disk_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#kms_key NotebooksRuntime#kms_key}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#enable_integrity_monitoring NotebooksRuntime#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#enable_secure_boot NotebooksRuntime#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/notebooks_runtime#enable_vtpm NotebooksRuntime#enable_vtpm}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksRuntimeAccessConfigOutputReference <a name="NotebooksRuntimeAccessConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner">ResetRuntimeOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetRuntimeOwner` <a name="ResetRuntimeOwner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner"></a>

```csharp
private void ResetRuntimeOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.proxyUri">ProxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput">RuntimeOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner">RuntimeOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProxyUri`<sup>Required</sup> <a name="ProxyUri" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.proxyUri"></a>

```csharp
public string ProxyUri { get; }
```

- *Type:* string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeOwnerInput`<sup>Optional</sup> <a name="RuntimeOwnerInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput"></a>

```csharp
public string RuntimeOwnerInput { get; }
```

- *Type:* string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `RuntimeOwner`<sup>Required</sup> <a name="RuntimeOwner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner"></a>

```csharp
public string RuntimeOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

---


### NotebooksRuntimeMetricsList <a name="NotebooksRuntimeMetricsList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get"></a>

```csharp
private NotebooksRuntimeMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NotebooksRuntimeMetricsOutputReference <a name="NotebooksRuntimeMetricsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.systemMetrics">SystemMetrics</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics">NotebooksRuntimeMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemMetrics`<sup>Required</sup> <a name="SystemMetrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.systemMetrics"></a>

```csharp
public StringMap SystemMetrics { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics">NotebooksRuntimeMetrics</a>

---


### NotebooksRuntimeSoftwareConfigKernelsList <a name="NotebooksRuntimeSoftwareConfigKernelsList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeSoftwareConfigKernelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get"></a>

```csharp
private NotebooksRuntimeSoftwareConfigKernelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksRuntimeSoftwareConfigKernelsOutputReference <a name="NotebooksRuntimeSoftwareConfigKernelsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeSoftwareConfigKernelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksRuntimeSoftwareConfigOutputReference <a name="NotebooksRuntimeSoftwareConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels">PutKernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath">ResetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring">ResetEnableHealthMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown">ResetIdleShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout">ResetIdleShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver">ResetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetKernels">ResetKernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule">ResetNotebookUpgradeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior">ResetPostStartupScriptBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKernels` <a name="PutKernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels"></a>

```csharp
private void PutKernels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomGpuDriverPath` <a name="ResetCustomGpuDriverPath" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath"></a>

```csharp
private void ResetCustomGpuDriverPath()
```

##### `ResetEnableHealthMonitoring` <a name="ResetEnableHealthMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring"></a>

```csharp
private void ResetEnableHealthMonitoring()
```

##### `ResetIdleShutdown` <a name="ResetIdleShutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown"></a>

```csharp
private void ResetIdleShutdown()
```

##### `ResetIdleShutdownTimeout` <a name="ResetIdleShutdownTimeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout"></a>

```csharp
private void ResetIdleShutdownTimeout()
```

##### `ResetInstallGpuDriver` <a name="ResetInstallGpuDriver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver"></a>

```csharp
private void ResetInstallGpuDriver()
```

##### `ResetKernels` <a name="ResetKernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetKernels"></a>

```csharp
private void ResetKernels()
```

##### `ResetNotebookUpgradeSchedule` <a name="ResetNotebookUpgradeSchedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule"></a>

```csharp
private void ResetNotebookUpgradeSchedule()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetPostStartupScriptBehavior` <a name="ResetPostStartupScriptBehavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior"></a>

```csharp
private void ResetPostStartupScriptBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernels">Kernels</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList">NotebooksRuntimeSoftwareConfigKernelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable">Upgradeable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput">CustomGpuDriverPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput">EnableHealthMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput">IdleShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput">IdleShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput">InstallGpuDriverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput">KernelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput">NotebookUpgradeScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput">PostStartupScriptBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring">EnableHealthMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown">IdleShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout">IdleShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule">NotebookUpgradeSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kernels`<sup>Required</sup> <a name="Kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernels"></a>

```csharp
public NotebooksRuntimeSoftwareConfigKernelsList Kernels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList">NotebooksRuntimeSoftwareConfigKernelsList</a>

---

##### `Upgradeable`<sup>Required</sup> <a name="Upgradeable" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable"></a>

```csharp
public IResolvable Upgradeable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomGpuDriverPathInput`<sup>Optional</sup> <a name="CustomGpuDriverPathInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput"></a>

```csharp
public string CustomGpuDriverPathInput { get; }
```

- *Type:* string

---

##### `EnableHealthMonitoringInput`<sup>Optional</sup> <a name="EnableHealthMonitoringInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput"></a>

```csharp
public object EnableHealthMonitoringInput { get; }
```

- *Type:* object

---

##### `IdleShutdownInput`<sup>Optional</sup> <a name="IdleShutdownInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput"></a>

```csharp
public object IdleShutdownInput { get; }
```

- *Type:* object

---

##### `IdleShutdownTimeoutInput`<sup>Optional</sup> <a name="IdleShutdownTimeoutInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput"></a>

```csharp
public double IdleShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `InstallGpuDriverInput`<sup>Optional</sup> <a name="InstallGpuDriverInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput"></a>

```csharp
public object InstallGpuDriverInput { get; }
```

- *Type:* object

---

##### `KernelsInput`<sup>Optional</sup> <a name="KernelsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput"></a>

```csharp
public object KernelsInput { get; }
```

- *Type:* object

---

##### `NotebookUpgradeScheduleInput`<sup>Optional</sup> <a name="NotebookUpgradeScheduleInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput"></a>

```csharp
public string NotebookUpgradeScheduleInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehaviorInput`<sup>Optional</sup> <a name="PostStartupScriptBehaviorInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```csharp
public string PostStartupScriptBehaviorInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `CustomGpuDriverPath`<sup>Required</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; }
```

- *Type:* string

---

##### `EnableHealthMonitoring`<sup>Required</sup> <a name="EnableHealthMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring"></a>

```csharp
public object EnableHealthMonitoring { get; }
```

- *Type:* object

---

##### `IdleShutdown`<sup>Required</sup> <a name="IdleShutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown"></a>

```csharp
public object IdleShutdown { get; }
```

- *Type:* object

---

##### `IdleShutdownTimeout`<sup>Required</sup> <a name="IdleShutdownTimeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout"></a>

```csharp
public double IdleShutdownTimeout { get; }
```

- *Type:* double

---

##### `InstallGpuDriver`<sup>Required</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; }
```

- *Type:* object

---

##### `NotebookUpgradeSchedule`<sup>Required</sup> <a name="NotebookUpgradeSchedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule"></a>

```csharp
public string NotebookUpgradeSchedule { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehavior`<sup>Required</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

---


### NotebooksRuntimeTimeoutsOutputReference <a name="NotebooksRuntimeTimeoutsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksRuntimeVirtualMachineOutputReference <a name="NotebooksRuntimeVirtualMachineOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig">PutVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig">ResetVirtualMachineConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualMachineConfig` <a name="PutVirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig"></a>

```csharp
private void PutVirtualMachineConfig(NotebooksRuntimeVirtualMachineVirtualMachineConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `ResetVirtualMachineConfig` <a name="ResetVirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig"></a>

```csharp
private void ResetVirtualMachineConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig">VirtualMachineConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput">VirtualMachineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `VirtualMachineConfig`<sup>Required</sup> <a name="VirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference VirtualMachineConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a>

---

##### `VirtualMachineConfigInput`<sup>Optional</sup> <a name="VirtualMachineConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get"></a>

```csharp
private NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName"></a>

```csharp
private void ResetDiskName()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName">DiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput"></a>

```csharp
public string DiskNameInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName"></a>

```csharp
public string DiskName { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams">PutInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams">ResetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitializeParams` <a name="PutInitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams"></a>

```csharp
private void PutInitializeParams(NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `ResetInitializeParams` <a name="ResetInitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams"></a>

```csharp
private void ResetInitializeParams()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot">Boot</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index">Index</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses">Licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput">InitializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete"></a>

```csharp
public IResolvable AutoDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot"></a>

```csharp
public IResolvable Boot { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures"></a>

```csharp
public string[] GuestOsFeatures { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index"></a>

```csharp
public double Index { get; }
```

- *Type:* double

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference InitializeParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses"></a>

```csharp
public string[] Licenses { get; }
```

- *Type:* string[]

---

##### `InitializeParamsInput`<sup>Optional</sup> <a name="InitializeParamsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig">PutAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages">PutContainerImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig">ResetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages">ResetContainerImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly">ResetInternalIpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorConfig` <a name="PutAcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig"></a>

```csharp
private void PutAcceleratorConfig(NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `PutContainerImages` <a name="PutContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages"></a>

```csharp
private void PutContainerImages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages.parameter.value"></a>

- *Type:* object

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk"></a>

```csharp
private void PutDataDisk(NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `ResetAcceleratorConfig` <a name="ResetAcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig"></a>

```csharp
private void ResetAcceleratorConfig()
```

##### `ResetContainerImages` <a name="ResetContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages"></a>

```csharp
private void ResetContainerImages()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetInternalIpOnly` <a name="ResetInternalIpOnly" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly"></a>

```csharp
private void ResetInternalIpOnly()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange"></a>

```csharp
private void ResetReservedIpRange()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages">ContainerImages</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes">GuestAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput">AcceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput">ContainerImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput">DataDiskInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput">InternalIpOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorConfig`<sup>Required</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference AcceleratorConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a>

---

##### `ContainerImages`<sup>Required</sup> <a name="ContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList ContainerImages { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference DataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a>

---

##### `GuestAttributes`<sup>Required</sup> <a name="GuestAttributes" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes"></a>

```csharp
public StringMap GuestAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `AcceleratorConfigInput`<sup>Optional</sup> <a name="AcceleratorConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `ContainerImagesInput`<sup>Optional</sup> <a name="ContainerImagesInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput"></a>

```csharp
public object ContainerImagesInput { get; }
```

- *Type:* object

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `InternalIpOnlyInput`<sup>Optional</sup> <a name="InternalIpOnlyInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput"></a>

```csharp
public object InternalIpOnlyInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput"></a>

```csharp
public string ReservedIpRangeInput { get; }
```

- *Type:* string

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `InternalIpOnly`<sup>Required</sup> <a name="InternalIpOnly" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---



