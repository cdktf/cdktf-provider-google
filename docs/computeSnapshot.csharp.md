# `computeSnapshot` Submodule <a name="`computeSnapshot` Submodule" id="@cdktf/provider-google.computeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSnapshot <a name="ComputeSnapshot" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot google_compute_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshot(Construct Scope, string Id, ComputeSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig">ComputeSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig">ComputeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey">PutSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey">PutSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetChainName">ResetChainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotEncryptionKey">ResetSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDiskEncryptionKey">ResetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetStorageLocations">ResetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSnapshotEncryptionKey` <a name="PutSnapshotEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey"></a>

```csharp
private void PutSnapshotEncryptionKey(ComputeSnapshotSnapshotEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---

##### `PutSourceDiskEncryptionKey` <a name="PutSourceDiskEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey"></a>

```csharp
private void PutSourceDiskEncryptionKey(ComputeSnapshotSourceDiskEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

---

##### `ResetChainName` <a name="ResetChainName" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetChainName"></a>

```csharp
private void ResetChainName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSnapshotEncryptionKey` <a name="ResetSnapshotEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotEncryptionKey"></a>

```csharp
private void ResetSnapshotEncryptionKey()
```

##### `ResetSourceDiskEncryptionKey` <a name="ResetSourceDiskEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDiskEncryptionKey"></a>

```csharp
private void ResetSourceDiskEncryptionKey()
```

##### `ResetStorageLocations` <a name="ResetStorageLocations" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetStorageLocations"></a>

```csharp
private void ResetStorageLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.licenses">Licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKey">SnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference">ComputeSnapshotSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotId">SnapshotId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference">ComputeSnapshotSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageBytes">StorageBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference">ComputeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.chainNameInput">ChainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKeyInput">SnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKeyInput">SourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskInput">SourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocationsInput">StorageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.chainName">ChainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.licenses"></a>

```csharp
public string[] Licenses { get; }
```

- *Type:* string[]

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionKey`<sup>Required</sup> <a name="SnapshotEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKey"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKeyOutputReference SnapshotEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference">ComputeSnapshotSnapshotEncryptionKeyOutputReference</a>

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotId"></a>

```csharp
public double SnapshotId { get; }
```

- *Type:* double

---

##### `SourceDiskEncryptionKey`<sup>Required</sup> <a name="SourceDiskEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKey"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKeyOutputReference SourceDiskEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference">ComputeSnapshotSourceDiskEncryptionKeyOutputReference</a>

---

##### `StorageBytes`<sup>Required</sup> <a name="StorageBytes" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageBytes"></a>

```csharp
public double StorageBytes { get; }
```

- *Type:* double

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.timeouts"></a>

```csharp
public ComputeSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference">ComputeSnapshotTimeoutsOutputReference</a>

---

##### `ChainNameInput`<sup>Optional</sup> <a name="ChainNameInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.chainNameInput"></a>

```csharp
public string ChainNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKeyInput"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---

##### `SourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="SourceDiskEncryptionKeyInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKeyInput"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskInput"></a>

```csharp
public string SourceDiskInput { get; }
```

- *Type:* string

---

##### `StorageLocationsInput`<sup>Optional</sup> <a name="StorageLocationsInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocationsInput"></a>

```csharp
public string[] StorageLocationsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ChainName`<sup>Required</sup> <a name="ChainName" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.chainName"></a>

```csharp
public string ChainName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; }
```

- *Type:* string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSnapshotConfig <a name="ComputeSnapshotConfig" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SourceDisk,
    string ChainName = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKey = null,
    ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKey = null,
    string[] StorageLocations = null,
    ComputeSnapshotTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | A reference to the disk used to create this snapshot. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.chainName">ChainName</a></code> | <code>string</code> | Creates the new snapshot in the snapshot chain labeled with the specified name. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#id ComputeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this Snapshot. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#project ComputeSnapshot#project}. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotEncryptionKey">SnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket storage location of the snapshot (regional or multi-regional). |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the disk is hosted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#name ComputeSnapshot#name}

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; set; }
```

- *Type:* string

A reference to the disk used to create this snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#source_disk ComputeSnapshot#source_disk}

---

##### `ChainName`<sup>Optional</sup> <a name="ChainName" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.chainName"></a>

```csharp
public string ChainName { get; set; }
```

- *Type:* string

Creates the new snapshot in the snapshot chain labeled with the specified name.

The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#chain_name ComputeSnapshot#chain_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#description ComputeSnapshot#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#id ComputeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this Snapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#labels ComputeSnapshot#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#project ComputeSnapshot#project}.

---

##### `SnapshotEncryptionKey`<sup>Optional</sup> <a name="SnapshotEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotEncryptionKey"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#snapshot_encryption_key ComputeSnapshot#snapshot_encryption_key}

---

##### `SourceDiskEncryptionKey`<sup>Optional</sup> <a name="SourceDiskEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDiskEncryptionKey"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#source_disk_encryption_key ComputeSnapshot#source_disk_encryption_key}

---

##### `StorageLocations`<sup>Optional</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; set; }
```

- *Type:* string[]

Cloud Storage bucket storage location of the snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#storage_locations ComputeSnapshot#storage_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.timeouts"></a>

```csharp
public ComputeSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#timeouts ComputeSnapshot#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the disk is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#zone ComputeSnapshot#zone}

---

### ComputeSnapshotSnapshotEncryptionKey <a name="ComputeSnapshotSnapshotEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotSnapshotEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#kms_key_self_link ComputeSnapshot#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#kms_key_service_account ComputeSnapshot#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#raw_key ComputeSnapshot#raw_key}

---

### ComputeSnapshotSourceDiskEncryptionKey <a name="ComputeSnapshotSourceDiskEncryptionKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotSourceDiskEncryptionKey {
    string KmsKeyServiceAccount = null,
    string RawKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#kms_key_service_account ComputeSnapshot#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#raw_key ComputeSnapshot#raw_key}

---

### ComputeSnapshotTimeouts <a name="ComputeSnapshotTimeouts" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#create ComputeSnapshot#create}. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#delete ComputeSnapshot#delete}. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#update ComputeSnapshot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#create ComputeSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#delete ComputeSnapshot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_snapshot#update ComputeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSnapshotSnapshotEncryptionKeyOutputReference <a name="ComputeSnapshotSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotSnapshotEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---


### ComputeSnapshotSourceDiskEncryptionKeyOutputReference <a name="ComputeSnapshotSourceDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotSourceDiskEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---


### ComputeSnapshotTimeoutsOutputReference <a name="ComputeSnapshotTimeoutsOutputReference" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



