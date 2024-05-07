# `edgecontainerNodePool` Submodule <a name="`edgecontainerNodePool` Submodule" id="@cdktf/provider-google.edgecontainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerNodePool <a name="EdgecontainerNodePool" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool google_edgecontainer_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePool(Construct Scope, string Id, EdgecontainerNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig">EdgecontainerNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig">EdgecontainerNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption">PutLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLocalDiskEncryption">ResetLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetMachineFilter">ResetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocalDiskEncryption` <a name="PutLocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption"></a>

```csharp
private void PutLocalDiskEncryption(EdgecontainerNodePoolLocalDiskEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig"></a>

```csharp
private void PutNodeConfig(EdgecontainerNodePoolNodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(EdgecontainerNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocalDiskEncryption` <a name="ResetLocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLocalDiskEncryption"></a>

```csharp
private void ResetLocalDiskEncryption()
```

##### `ResetMachineFilter` <a name="ResetMachineFilter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetMachineFilter"></a>

```csharp
private void ResetMachineFilter()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetNodeConfig"></a>

```csharp
private void ResetNodeConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EdgecontainerNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EdgecontainerNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EdgecontainerNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryption">LocalDiskEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference">EdgecontainerNodePoolLocalDiskEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference">EdgecontainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference">EdgecontainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryptionInput">LocalDiskEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilterInput">MachineFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocationInput">NodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilter">MachineFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LocalDiskEncryption`<sup>Required</sup> <a name="LocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryption"></a>

```csharp
public EdgecontainerNodePoolLocalDiskEncryptionOutputReference LocalDiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference">EdgecontainerNodePoolLocalDiskEncryptionOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfig"></a>

```csharp
public EdgecontainerNodePoolNodeConfigOutputReference NodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference">EdgecontainerNodePoolNodeConfigOutputReference</a>

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeouts"></a>

```csharp
public EdgecontainerNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference">EdgecontainerNodePoolTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocalDiskEncryptionInput`<sup>Optional</sup> <a name="LocalDiskEncryptionInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryptionInput"></a>

```csharp
public EdgecontainerNodePoolLocalDiskEncryption LocalDiskEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MachineFilterInput`<sup>Optional</sup> <a name="MachineFilterInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilterInput"></a>

```csharp
public string MachineFilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfigInput"></a>

```csharp
public EdgecontainerNodePoolNodeConfig NodeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocationInput"></a>

```csharp
public string NodeLocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MachineFilter`<sup>Required</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilter"></a>

```csharp
public string MachineFilter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerNodePoolConfig <a name="EdgecontainerNodePoolConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    string Location,
    string Name,
    double NodeCount,
    string NodeLocation,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    EdgecontainerNodePoolLocalDiskEncryption LocalDiskEncryption = null,
    string MachineFilter = null,
    EdgecontainerNodePoolNodeConfig NodeConfig = null,
    string Project = null,
    EdgecontainerNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.cluster">Cluster</a></code> | <code>string</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.localDiskEncryption">LocalDiskEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.machineFilter">MachineFilter</a></code> | <code>string</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#cluster EdgecontainerNodePool#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#location EdgecontainerNodePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#name EdgecontainerNodePool#name}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#node_count EdgecontainerNodePool#node_count}

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; set; }
```

- *Type:* string

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#node_location EdgecontainerNodePool#node_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

##### `LocalDiskEncryption`<sup>Optional</sup> <a name="LocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.localDiskEncryption"></a>

```csharp
public EdgecontainerNodePoolLocalDiskEncryption LocalDiskEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#local_disk_encryption EdgecontainerNodePool#local_disk_encryption}

---

##### `MachineFilter`<sup>Optional</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.machineFilter"></a>

```csharp
public string MachineFilter { get; set; }
```

- *Type:* string

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#machine_filter EdgecontainerNodePool#machine_filter}

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeConfig"></a>

```csharp
public EdgecontainerNodePoolNodeConfig NodeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#node_config EdgecontainerNodePool#node_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.timeouts"></a>

```csharp
public EdgecontainerNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#timeouts EdgecontainerNodePool#timeouts}

---

### EdgecontainerNodePoolLocalDiskEncryption <a name="EdgecontainerNodePoolLocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolLocalDiskEncryption {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#kms_key EdgecontainerNodePool#kms_key}

---

### EdgecontainerNodePoolNodeConfig <a name="EdgecontainerNodePoolNodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolNodeConfig {
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | "The Kubernetes node labels". |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

### EdgecontainerNodePoolTimeouts <a name="EdgecontainerNodePoolTimeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerNodePoolLocalDiskEncryptionOutputReference <a name="EdgecontainerNodePoolLocalDiskEncryptionOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolLocalDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion">KmsKeyActiveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyActiveVersion`<sup>Required</sup> <a name="KmsKeyActiveVersion" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```csharp
public string KmsKeyActiveVersion { get; }
```

- *Type:* string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState"></a>

```csharp
public string KmsKeyState { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerNodePoolLocalDiskEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

---


### EdgecontainerNodePoolNodeConfigOutputReference <a name="EdgecontainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerNodePoolNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

---


### EdgecontainerNodePoolTimeoutsOutputReference <a name="EdgecontainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



