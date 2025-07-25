# `bigtableTable` Submodule <a name="`bigtableTable` Submodule" id="@cdktf/provider-google.bigtableTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableTable <a name="BigtableTable" id="@cdktf/provider-google.bigtableTable.BigtableTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table google_bigtable_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableTable.BigtableTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTable(Construct Scope, string Id, BigtableTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig">BigtableTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigtableTable.BigtableTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig">BigtableTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.putAutomatedBackupPolicy">PutAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.putColumnFamily">PutColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetAutomatedBackupPolicy">ResetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetChangeStreamRetention">ResetChangeStreamRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetColumnFamily">ResetColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetRowKeySchema">ResetRowKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetSplitKeys">ResetSplitKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableTable.BigtableTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableTable.BigtableTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigtableTable.BigtableTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableTable.BigtableTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableTable.BigtableTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigtableTable.BigtableTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableTable.BigtableTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableTable.BigtableTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableTable.BigtableTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableTable.BigtableTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableTable.BigtableTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableTable.BigtableTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableTable.BigtableTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableTable.BigtableTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedBackupPolicy` <a name="PutAutomatedBackupPolicy" id="@cdktf/provider-google.bigtableTable.BigtableTable.putAutomatedBackupPolicy"></a>

```csharp
private void PutAutomatedBackupPolicy(BigtableTableAutomatedBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableTable.BigtableTable.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a>

---

##### `PutColumnFamily` <a name="PutColumnFamily" id="@cdktf/provider-google.bigtableTable.BigtableTable.putColumnFamily"></a>

```csharp
private void PutColumnFamily(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableTable.BigtableTable.putColumnFamily.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableTable.BigtableTable.putTimeouts"></a>

```csharp
private void PutTimeouts(BigtableTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableTable.BigtableTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeouts">BigtableTableTimeouts</a>

---

##### `ResetAutomatedBackupPolicy` <a name="ResetAutomatedBackupPolicy" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetAutomatedBackupPolicy"></a>

```csharp
private void ResetAutomatedBackupPolicy()
```

##### `ResetChangeStreamRetention` <a name="ResetChangeStreamRetention" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetChangeStreamRetention"></a>

```csharp
private void ResetChangeStreamRetention()
```

##### `ResetColumnFamily` <a name="ResetColumnFamily" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetColumnFamily"></a>

```csharp
private void ResetColumnFamily()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRowKeySchema` <a name="ResetRowKeySchema" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetRowKeySchema"></a>

```csharp
private void ResetRowKeySchema()
```

##### `ResetSplitKeys` <a name="ResetSplitKeys" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetSplitKeys"></a>

```csharp
private void ResetSplitKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableTable.BigtableTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableTable.BigtableTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableTable.BigtableTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableTable.BigtableTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigtableTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableTable.BigtableTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigtableTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference">BigtableTableAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList">BigtableTableColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference">BigtableTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.automatedBackupPolicyInput">AutomatedBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.changeStreamRetentionInput">ChangeStreamRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.rowKeySchemaInput">RowKeySchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.splitKeysInput">SplitKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.changeStreamRetention">ChangeStreamRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.rowKeySchema">RowKeySchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.splitKeys">SplitKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutomatedBackupPolicy`<sup>Required</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.automatedBackupPolicy"></a>

```csharp
public BigtableTableAutomatedBackupPolicyOutputReference AutomatedBackupPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference">BigtableTableAutomatedBackupPolicyOutputReference</a>

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.columnFamily"></a>

```csharp
public BigtableTableColumnFamilyList ColumnFamily { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList">BigtableTableColumnFamilyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.timeouts"></a>

```csharp
public BigtableTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference">BigtableTableTimeoutsOutputReference</a>

---

##### `AutomatedBackupPolicyInput`<sup>Optional</sup> <a name="AutomatedBackupPolicyInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.automatedBackupPolicyInput"></a>

```csharp
public BigtableTableAutomatedBackupPolicy AutomatedBackupPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a>

---

##### `ChangeStreamRetentionInput`<sup>Optional</sup> <a name="ChangeStreamRetentionInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.changeStreamRetentionInput"></a>

```csharp
public string ChangeStreamRetentionInput { get; }
```

- *Type:* string

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.columnFamilyInput"></a>

```csharp
public object ColumnFamilyInput { get; }
```

- *Type:* object

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.deletionProtectionInput"></a>

```csharp
public string DeletionProtectionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RowKeySchemaInput`<sup>Optional</sup> <a name="RowKeySchemaInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.rowKeySchemaInput"></a>

```csharp
public string RowKeySchemaInput { get; }
```

- *Type:* string

---

##### `SplitKeysInput`<sup>Optional</sup> <a name="SplitKeysInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.splitKeysInput"></a>

```csharp
public string[] SplitKeysInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ChangeStreamRetention`<sup>Required</sup> <a name="ChangeStreamRetention" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.changeStreamRetention"></a>

```csharp
public string ChangeStreamRetention { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RowKeySchema`<sup>Required</sup> <a name="RowKeySchema" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.rowKeySchema"></a>

```csharp
public string RowKeySchema { get; }
```

- *Type:* string

---

##### `SplitKeys`<sup>Required</sup> <a name="SplitKeys" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.splitKeys"></a>

```csharp
public string[] SplitKeys { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableTable.BigtableTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableTableAutomatedBackupPolicy <a name="BigtableTableAutomatedBackupPolicy" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableAutomatedBackupPolicy {
    string Frequency = null,
    string RetentionPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy.property.frequency">Frequency</a></code> | <code>string</code> | How frequently automated backups should occur. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy.property.retentionPeriod">RetentionPeriod</a></code> | <code>string</code> | How long the automated backups should be retained. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

How frequently automated backups should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#frequency BigtableTable#frequency}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy.property.retentionPeriod"></a>

```csharp
public string RetentionPeriod { get; set; }
```

- *Type:* string

How long the automated backups should be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#retention_period BigtableTable#retention_period}

---

### BigtableTableColumnFamily <a name="BigtableTableColumnFamily" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableColumnFamily {
    string Family,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily.property.family">Family</a></code> | <code>string</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily.property.type">Type</a></code> | <code>string</code> | The type of the column family. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#family BigtableTable#family}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamily.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#type BigtableTable#type}

---

### BigtableTableConfig <a name="BigtableTableConfig" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceName,
    string Name,
    BigtableTableAutomatedBackupPolicy AutomatedBackupPolicy = null,
    string ChangeStreamRetention = null,
    object ColumnFamily = null,
    string DeletionProtection = null,
    string Id = null,
    string Project = null,
    string RowKeySchema = null,
    string[] SplitKeys = null,
    BigtableTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.name">Name</a></code> | <code>string</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.changeStreamRetention">ChangeStreamRetention</a></code> | <code>string</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.columnFamily">ColumnFamily</a></code> | <code>object</code> | column_family block. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#id BigtableTable#id}. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.rowKeySchema">RowKeySchema</a></code> | <code>string</code> | Defines the row key schema of a table. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.splitKeys">SplitKeys</a></code> | <code>string[]</code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeouts">BigtableTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#instance_name BigtableTable#instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#name BigtableTable#name}

---

##### `AutomatedBackupPolicy`<sup>Optional</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.automatedBackupPolicy"></a>

```csharp
public BigtableTableAutomatedBackupPolicy AutomatedBackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#automated_backup_policy BigtableTable#automated_backup_policy}

---

##### `ChangeStreamRetention`<sup>Optional</sup> <a name="ChangeStreamRetention" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.changeStreamRetention"></a>

```csharp
public string ChangeStreamRetention { get; set; }
```

- *Type:* string

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#change_stream_retention BigtableTable#change_stream_retention}

---

##### `ColumnFamily`<sup>Optional</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.columnFamily"></a>

```csharp
public object ColumnFamily { get; set; }
```

- *Type:* object

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#column_family BigtableTable#column_family}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; set; }
```

- *Type:* string

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#deletion_protection BigtableTable#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#id BigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#project BigtableTable#project}

---

##### `RowKeySchema`<sup>Optional</sup> <a name="RowKeySchema" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.rowKeySchema"></a>

```csharp
public string RowKeySchema { get; set; }
```

- *Type:* string

Defines the row key schema of a table.

To create or update a table with a row key schema, specify this argument.
Note that in-place update is not supported, and any in-place modification to the schema will lead to failure.
To update a schema, please clear it (by omitting the field), and update the resource again with a new schema.\n

```
				The schema must be a valid JSON encoded string representing a Type's struct protobuf message. Note that for bytes sequence (like delimited_bytes.delimiter)
				the delimiter must be base64 encoded. For example, if you want to set a delimiter to a single byte character "#", it should be set to "Iw==", which is the base64 encoding of the byte sequence "#".
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#row_key_schema BigtableTable#row_key_schema}

---

##### `SplitKeys`<sup>Optional</sup> <a name="SplitKeys" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.splitKeys"></a>

```csharp
public string[] SplitKeys { get; set; }
```

- *Type:* string[]

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#split_keys BigtableTable#split_keys}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableTable.BigtableTableConfig.property.timeouts"></a>

```csharp
public BigtableTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeouts">BigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#timeouts BigtableTable#timeouts}

---

### BigtableTableTimeouts <a name="BigtableTableTimeouts" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#create BigtableTable#create}. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#update BigtableTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#create BigtableTable#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_table#update BigtableTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableTableAutomatedBackupPolicyOutputReference <a name="BigtableTableAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableAutomatedBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput"></a>

```csharp
public string RetentionPeriodInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod"></a>

```csharp
public string RetentionPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public BigtableTableAutomatedBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableTable.BigtableTableAutomatedBackupPolicy">BigtableTableAutomatedBackupPolicy</a>

---


### BigtableTableColumnFamilyList <a name="BigtableTableColumnFamilyList" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableColumnFamilyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.get"></a>

```csharp
private BigtableTableColumnFamilyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigtableTableColumnFamilyOutputReference <a name="BigtableTableColumnFamilyOutputReference" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableColumnFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableTable.BigtableTableColumnFamilyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigtableTableTimeoutsOutputReference <a name="BigtableTableTimeoutsOutputReference" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableTable.BigtableTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



