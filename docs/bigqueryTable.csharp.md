# `bigqueryTable` Submodule <a name="`bigqueryTable` Submodule" id="@cdktf/provider-google.bigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryTable <a name="BigqueryTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTable(Construct Scope, string Id, BigqueryTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig">BigqueryTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig">BigqueryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putBiglakeConfiguration">PutBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration">PutExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView">PutMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning">PutRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints">PutTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo">PutTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning">PutTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetBiglakeConfiguration">ResetBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering">ResetClustering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration">ResetExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView">ResetMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness">ResetMaxStaleness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning">ResetRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints">ResetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo">ResetTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning">ResetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBiglakeConfiguration` <a name="PutBiglakeConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putBiglakeConfiguration"></a>

```csharp
private void PutBiglakeConfiguration(BigqueryTableBiglakeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putBiglakeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(BigqueryTableEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---

##### `PutExternalDataConfiguration` <a name="PutExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration"></a>

```csharp
private void PutExternalDataConfiguration(BigqueryTableExternalDataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---

##### `PutMaterializedView` <a name="PutMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView"></a>

```csharp
private void PutMaterializedView(BigqueryTableMaterializedView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---

##### `PutRangePartitioning` <a name="PutRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning"></a>

```csharp
private void PutRangePartitioning(BigqueryTableRangePartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---

##### `PutTableConstraints` <a name="PutTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints"></a>

```csharp
private void PutTableConstraints(BigqueryTableTableConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---

##### `PutTableReplicationInfo` <a name="PutTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo"></a>

```csharp
private void PutTableReplicationInfo(BigqueryTableTableReplicationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---

##### `PutTimePartitioning` <a name="PutTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning"></a>

```csharp
private void PutTimePartitioning(BigqueryTableTimePartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView"></a>

```csharp
private void PutView(BigqueryTableView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---

##### `ResetBiglakeConfiguration` <a name="ResetBiglakeConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetBiglakeConfiguration"></a>

```csharp
private void ResetBiglakeConfiguration()
```

##### `ResetClustering` <a name="ResetClustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering"></a>

```csharp
private void ResetClustering()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetExternalDataConfiguration` <a name="ResetExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration"></a>

```csharp
private void ResetExternalDataConfiguration()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaterializedView` <a name="ResetMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView"></a>

```csharp
private void ResetMaterializedView()
```

##### `ResetMaxStaleness` <a name="ResetMaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness"></a>

```csharp
private void ResetMaxStaleness()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRangePartitioning` <a name="ResetRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning"></a>

```csharp
private void ResetRangePartitioning()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTableConstraints` <a name="ResetTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints"></a>

```csharp
private void ResetTableConstraints()
```

##### `ResetTableReplicationInfo` <a name="ResetTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo"></a>

```csharp
private void ResetTableReplicationInfo()
```

##### `ResetTimePartitioning` <a name="ResetTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning"></a>

```csharp
private void ResetTimePartitioning()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView"></a>

```csharp
private void ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference">BigqueryTableBiglakeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes">NumBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes">NumLongTermBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows">NumRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.biglakeConfigurationInput">BiglakeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput">ClusteringInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput">ExternalDataConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput">MaterializedViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput">MaxStalenessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput">RangePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput">TableConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput">TableReplicationInfoInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput">TimePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering">Clustering</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness">MaxStaleness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BiglakeConfiguration`<sup>Required</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.biglakeConfiguration"></a>

```csharp
public BigqueryTableBiglakeConfigurationOutputReference BiglakeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference">BigqueryTableBiglakeConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration"></a>

```csharp
public BigqueryTableEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExternalDataConfiguration`<sup>Required</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration"></a>

```csharp
public BigqueryTableExternalDataConfigurationOutputReference ExternalDataConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaterializedView`<sup>Required</sup> <a name="MaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView"></a>

```csharp
public BigqueryTableMaterializedViewOutputReference MaterializedView { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a>

---

##### `NumBytes`<sup>Required</sup> <a name="NumBytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes"></a>

```csharp
public double NumBytes { get; }
```

- *Type:* double

---

##### `NumLongTermBytes`<sup>Required</sup> <a name="NumLongTermBytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes"></a>

```csharp
public double NumLongTermBytes { get; }
```

- *Type:* double

---

##### `NumRows`<sup>Required</sup> <a name="NumRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows"></a>

```csharp
public double NumRows { get; }
```

- *Type:* double

---

##### `RangePartitioning`<sup>Required</sup> <a name="RangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning"></a>

```csharp
public BigqueryTableRangePartitioningOutputReference RangePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints"></a>

```csharp
public BigqueryTableTableConstraintsOutputReference TableConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a>

---

##### `TableReplicationInfo`<sup>Required</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo"></a>

```csharp
public BigqueryTableTableReplicationInfoOutputReference TableReplicationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning"></a>

```csharp
public BigqueryTableTimePartitioningOutputReference TimePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view"></a>

```csharp
public BigqueryTableViewOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a>

---

##### `BiglakeConfigurationInput`<sup>Optional</sup> <a name="BiglakeConfigurationInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.biglakeConfigurationInput"></a>

```csharp
public BigqueryTableBiglakeConfiguration BiglakeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a>

---

##### `ClusteringInput`<sup>Optional</sup> <a name="ClusteringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput"></a>

```csharp
public string[] ClusteringInput { get; }
```

- *Type:* string[]

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput"></a>

```csharp
public BigqueryTableEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput"></a>

```csharp
public double ExpirationTimeInput { get; }
```

- *Type:* double

---

##### `ExternalDataConfigurationInput`<sup>Optional</sup> <a name="ExternalDataConfigurationInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput"></a>

```csharp
public BigqueryTableExternalDataConfiguration ExternalDataConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaterializedViewInput`<sup>Optional</sup> <a name="MaterializedViewInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput"></a>

```csharp
public BigqueryTableMaterializedView MaterializedViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---

##### `MaxStalenessInput`<sup>Optional</sup> <a name="MaxStalenessInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput"></a>

```csharp
public string MaxStalenessInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RangePartitioningInput`<sup>Optional</sup> <a name="RangePartitioningInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput"></a>

```csharp
public BigqueryTableRangePartitioning RangePartitioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TableConstraintsInput`<sup>Optional</sup> <a name="TableConstraintsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput"></a>

```csharp
public BigqueryTableTableConstraints TableConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `TableReplicationInfoInput`<sup>Optional</sup> <a name="TableReplicationInfoInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput"></a>

```csharp
public BigqueryTableTableReplicationInfo TableReplicationInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---

##### `TimePartitioningInput`<sup>Optional</sup> <a name="TimePartitioningInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput"></a>

```csharp
public BigqueryTableTimePartitioning TimePartitioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput"></a>

```csharp
public BigqueryTableView ViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---

##### `Clustering`<sup>Required</sup> <a name="Clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering"></a>

```csharp
public string[] Clustering { get; }
```

- *Type:* string[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; }
```

- *Type:* double

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxStaleness`<sup>Required</sup> <a name="MaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness"></a>

```csharp
public string MaxStaleness { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryTableBiglakeConfiguration <a name="BigqueryTableBiglakeConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableBiglakeConfiguration {
    string ConnectionId,
    string FileFormat,
    string StorageUri,
    string TableFormat
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.connectionId">ConnectionId</a></code> | <code>string</code> | The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.fileFormat">FileFormat</a></code> | <code>string</code> | The file format the data is stored in. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.storageUri">StorageUri</a></code> | <code>string</code> | The fully qualified location prefix of the external folder where table data is stored. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.tableFormat">TableFormat</a></code> | <code>string</code> | The table format the metadata only snapshots are stored in. |

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage.

The connection_id can have the form "<project_id>.<location_id>.<connection_id>" or "projects/<project_id>/locations/<location_id>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.fileFormat"></a>

```csharp
public string FileFormat { get; set; }
```

- *Type:* string

The file format the data is stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#file_format BigqueryTable#file_format}

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.storageUri"></a>

```csharp
public string StorageUri { get; set; }
```

- *Type:* string

The fully qualified location prefix of the external folder where table data is stored.

The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#storage_uri BigqueryTable#storage_uri}

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration.property.tableFormat"></a>

```csharp
public string TableFormat { get; set; }
```

- *Type:* string

The table format the metadata only snapshots are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#table_format BigqueryTable#table_format}

---

### BigqueryTableConfig <a name="BigqueryTableConfig" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetId,
    string TableId,
    BigqueryTableBiglakeConfiguration BiglakeConfiguration = null,
    string[] Clustering = null,
    object DeletionProtection = null,
    string Description = null,
    BigqueryTableEncryptionConfiguration EncryptionConfiguration = null,
    double ExpirationTime = null,
    BigqueryTableExternalDataConfiguration ExternalDataConfiguration = null,
    string FriendlyName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    BigqueryTableMaterializedView MaterializedView = null,
    string MaxStaleness = null,
    string Project = null,
    BigqueryTableRangePartitioning RangePartitioning = null,
    object RequirePartitionFilter = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null,
    string Schema = null,
    BigqueryTableTableConstraints TableConstraints = null,
    BigqueryTableTableReplicationInfo TableReplicationInfo = null,
    BigqueryTableTimePartitioning TimePartitioning = null,
    BigqueryTableView View = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId">TableId</a></code> | <code>string</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a></code> | biglake_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering">Clustering</a></code> | <code>string[]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description">Description</a></code> | <code>string</code> | The field description. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness">MaxStaleness</a></code> | <code>string</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema">Schema</a></code> | <code>string</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | view block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `BiglakeConfiguration`<sup>Optional</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.biglakeConfiguration"></a>

```csharp
public BigqueryTableBiglakeConfiguration BiglakeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a>

biglake_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#biglake_configuration BigqueryTable#biglake_configuration}

---

##### `Clustering`<sup>Optional</sup> <a name="Clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering"></a>

```csharp
public string[] Clustering { get; set; }
```

- *Type:* string[]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether Terraform will be prevented from destroying the instance.

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the table will fail. When the field is set to false, deleting the table is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration"></a>

```csharp
public BigqueryTableEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; set; }
```

- *Type:* double

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `ExternalDataConfiguration`<sup>Optional</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration"></a>

```csharp
public BigqueryTableExternalDataConfiguration ExternalDataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `MaterializedView`<sup>Optional</sup> <a name="MaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView"></a>

```csharp
public BigqueryTableMaterializedView MaterializedView { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `MaxStaleness`<sup>Optional</sup> <a name="MaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness"></a>

```csharp
public string MaxStaleness { get; set; }
```

- *Type:* string

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#max_staleness BigqueryTable#max_staleness}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `RangePartitioning`<sup>Optional</sup> <a name="RangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning"></a>

```csharp
public BigqueryTableRangePartitioning RangePartitioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#resource_tags BigqueryTable#resource_tags}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `TableConstraints`<sup>Optional</sup> <a name="TableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints"></a>

```csharp
public BigqueryTableTableConstraints TableConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#table_constraints BigqueryTable#table_constraints}

---

##### `TableReplicationInfo`<sup>Optional</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo"></a>

```csharp
public BigqueryTableTableReplicationInfo TableReplicationInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#table_replication_info BigqueryTable#table_replication_info}

---

##### `TimePartitioning`<sup>Optional</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning"></a>

```csharp
public BigqueryTableTimePartitioning TimePartitioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view"></a>

```csharp
public BigqueryTableView View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#view BigqueryTable#view}

---

### BigqueryTableEncryptionConfiguration <a name="BigqueryTableEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableEncryptionConfiguration {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The self link or full name of a key which should be used to encrypt this table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

### BigqueryTableExternalDataConfiguration <a name="BigqueryTableExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfiguration {
    object Autodetect,
    string[] SourceUris,
    BigqueryTableExternalDataConfigurationAvroOptions AvroOptions = null,
    BigqueryTableExternalDataConfigurationBigtableOptions BigtableOptions = null,
    string Compression = null,
    string ConnectionId = null,
    BigqueryTableExternalDataConfigurationCsvOptions CsvOptions = null,
    string FileSetSpecType = null,
    BigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptions = null,
    BigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptions = null,
    object IgnoreUnknownValues = null,
    string JsonExtension = null,
    BigqueryTableExternalDataConfigurationJsonOptions JsonOptions = null,
    double MaxBadRecords = null,
    string MetadataCacheMode = null,
    string ObjectMetadata = null,
    BigqueryTableExternalDataConfigurationParquetOptions ParquetOptions = null,
    string ReferenceFileSchemaUri = null,
    string Schema = null,
    string SourceFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect">Autodetect</a></code> | <code>object</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a></code> | bigtable_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression">Compression</a></code> | <code>string</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId">ConnectionId</a></code> | <code>string</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType">FileSetSpecType</a></code> | <code>string</code> | Specifies how source URIs are interpreted for constructing the file set to load. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>string</code> | Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata">ObjectMetadata</a></code> | <code>string</code> | Object Metadata is used to create Object Tables. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>string</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema">Schema</a></code> | <code>string</code> | A JSON schema for the external table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". |

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect"></a>

```csharp
public object Autodetect { get; set; }
```

- *Type:* object

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; set; }
```

- *Type:* string[]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

##### `AvroOptions`<sup>Optional</sup> <a name="AvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationAvroOptions AvroOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

##### `BigtableOptions`<sup>Optional</sup> <a name="BigtableOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.bigtableOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptions BigtableOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a>

bigtable_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#bigtable_options BigqueryTable#bigtable_options}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationCsvOptions CsvOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

##### `FileSetSpecType`<sup>Optional</sup> <a name="FileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType"></a>

```csharp
public string FileSetSpecType { get; set; }
```

- *Type:* string

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#file_set_spec_type BigqueryTable#file_set_spec_type}

---

##### `GoogleSheetsOptions`<sup>Optional</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

##### `HivePartitioningOptions`<sup>Optional</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

##### `IgnoreUnknownValues`<sup>Optional</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

##### `JsonExtension`<sup>Optional</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; set; }
```

- *Type:* string

Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded.

To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#json_extension BigqueryTable#json_extension}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationJsonOptions JsonOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#json_options BigqueryTable#json_options}

---

##### `MaxBadRecords`<sup>Optional</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; set; }
```

- *Type:* double

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

##### `MetadataCacheMode`<sup>Optional</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode"></a>

```csharp
public string MetadataCacheMode { get; set; }
```

- *Type:* string

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#metadata_cache_mode BigqueryTable#metadata_cache_mode}

---

##### `ObjectMetadata`<sup>Optional</sup> <a name="ObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata"></a>

```csharp
public string ObjectMetadata { get; set; }
```

- *Type:* string

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#object_metadata BigqueryTable#object_metadata}

---

##### `ParquetOptions`<sup>Optional</sup> <a name="ParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationParquetOptions ParquetOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#parquet_options BigqueryTable#parquet_options}

---

##### `ReferenceFileSchemaUri`<sup>Optional</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```csharp
public string ReferenceFileSchemaUri { get; set; }
```

- *Type:* string

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

### BigqueryTableExternalDataConfigurationAvroOptions <a name="BigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationAvroOptions {
    object UseAvroLogicalTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). |

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; set; }
```

- *Type:* object

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

---

### BigqueryTableExternalDataConfigurationBigtableOptions <a name="BigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptions {
    object ColumnFamily = null,
    object IgnoreUnspecifiedColumnFamilies = null,
    object OutputColumnFamiliesAsJson = null,
    object ReadRowkeyAsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily">ColumnFamily</a></code> | <code>object</code> | column_family block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>object</code> | If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>object</code> | If field is true, then each column family will be read as a single JSON column. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>object</code> | If field is true, then the rowkey column families will be read and converted to string. |

---

##### `ColumnFamily`<sup>Optional</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily"></a>

```csharp
public object ColumnFamily { get; set; }
```

- *Type:* object

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#column_family BigqueryTable#column_family}

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Optional</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies"></a>

```csharp
public object IgnoreUnspecifiedColumnFamilies { get; set; }
```

- *Type:* object

If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema.

Otherwise, they are read with BYTES type values. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#ignore_unspecified_column_families BigqueryTable#ignore_unspecified_column_families}

---

##### `OutputColumnFamiliesAsJson`<sup>Optional</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson"></a>

```csharp
public object OutputColumnFamiliesAsJson { get; set; }
```

- *Type:* object

If field is true, then each column family will be read as a single JSON column.

Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#output_column_families_as_json BigqueryTable#output_column_families_as_json}

---

##### `ReadRowkeyAsString`<sup>Optional</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString"></a>

```csharp
public object ReadRowkeyAsString { get; set; }
```

- *Type:* object

If field is true, then the rowkey column families will be read and converted to string.

Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#read_rowkey_as_string BigqueryTable#read_rowkey_as_string}

---

### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily {
    object Column = null,
    string Encoding = null,
    string FamilyId = null,
    object OnlyReadLatest = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column">Column</a></code> | <code>object</code> | column block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding">Encoding</a></code> | <code>string</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId">FamilyId</a></code> | <code>string</code> | Identifier of the column family. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | If this is set only the latest version of value are exposed for all columns in this column family. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type">Type</a></code> | <code>string</code> | The type to convert the value in cells of this column family. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column"></a>

```csharp
public object Column { get; set; }
```

- *Type:* object

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#column BigqueryTable#column}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `FamilyId`<sup>Optional</sup> <a name="FamilyId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId"></a>

```csharp
public string FamilyId { get; set; }
```

- *Type:* string

Identifier of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#family_id BigqueryTable#family_id}

---

##### `OnlyReadLatest`<sup>Optional</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; set; }
```

- *Type:* object

If this is set only the latest version of value are exposed for all columns in this column family.

This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#only_read_latest BigqueryTable#only_read_latest}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type to convert the value in cells of this column family.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON". Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn {
    string Encoding = null,
    string FieldName = null,
    object OnlyReadLatest = null,
    string QualifierEncoded = null,
    string QualifierString = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding">Encoding</a></code> | <code>string</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName">FieldName</a></code> | <code>string</code> | If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | If this is set, only the latest version of value in this column are exposed. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded">QualifierEncoded</a></code> | <code>string</code> | Qualifier of the column. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString">QualifierString</a></code> | <code>string</code> | Qualifier string. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type">Type</a></code> | <code>string</code> | The type to convert the value in cells of this column. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#field_name BigqueryTable#field_name}

---

##### `OnlyReadLatest`<sup>Optional</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; set; }
```

- *Type:* object

If this is set, only the latest version of value in this column are exposed.

'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#only_read_latest BigqueryTable#only_read_latest}

---

##### `QualifierEncoded`<sup>Optional</sup> <a name="QualifierEncoded" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded"></a>

```csharp
public string QualifierEncoded { get; set; }
```

- *Type:* string

Qualifier of the column.

Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifierString field. Otherwise, a base-64 encoded value must be set to qualifierEncoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as fieldName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#qualifier_encoded BigqueryTable#qualifier_encoded}

---

##### `QualifierString`<sup>Optional</sup> <a name="QualifierString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString"></a>

```csharp
public string QualifierString { get; set; }
```

- *Type:* string

Qualifier string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#qualifier_string BigqueryTable#qualifier_string}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type to convert the value in cells of this column.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON", Default type is "BYTES". 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

### BigqueryTableExternalDataConfigurationCsvOptions <a name="BigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationCsvOptions {
    string Quote,
    object AllowJaggedRows = null,
    object AllowQuotedNewlines = null,
    string Encoding = null,
    string FieldDelimiter = null,
    double SkipLeadingRows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote">Quote</a></code> | <code>string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | Indicates if BigQuery should accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding">Encoding</a></code> | <code>string</code> | The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | The number of rows at the top of a CSV file that BigQuery will skip when reading the data. |

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote"></a>

```csharp
public string Quote { get; set; }
```

- *Type:* string

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

##### `AllowJaggedRows`<sup>Optional</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; set; }
```

- *Type:* object

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

##### `AllowQuotedNewlines`<sup>Optional</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; set; }
```

- *Type:* double

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
    string Range = null,
    double SkipLeadingRows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range">Range</a></code> | <code>string</code> | Range of a sheet to query from. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | The number of rows at the top of the sheet that BigQuery will skip when reading the data. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; set; }
```

- *Type:* double

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationHivePartitioningOptions {
    string Mode = null,
    object RequirePartitionFilter = null,
    string SourceUriPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode">Mode</a></code> | <code>string</code> | When set, what mode of hive partitioning to use when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>string</code> | When hive partition detection is requested, a common for all source uris must be required. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `SourceUriPrefix`<sup>Optional</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```csharp
public string SourceUriPrefix { get; set; }
```

- *Type:* string

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

---

### BigqueryTableExternalDataConfigurationJsonOptions <a name="BigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationJsonOptions {
    string Encoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding">Encoding</a></code> | <code>string</code> | The character encoding of the data. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

### BigqueryTableExternalDataConfigurationParquetOptions <a name="BigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationParquetOptions {
    object EnableListInference = null,
    object EnumAsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference">EnableListInference</a></code> | <code>object</code> | Indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString">EnumAsString</a></code> | <code>object</code> | Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `EnableListInference`<sup>Optional</sup> <a name="EnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference"></a>

```csharp
public object EnableListInference { get; set; }
```

- *Type:* object

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#enable_list_inference BigqueryTable#enable_list_inference}

---

##### `EnumAsString`<sup>Optional</sup> <a name="EnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString"></a>

```csharp
public object EnumAsString { get; set; }
```

- *Type:* object

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#enum_as_string BigqueryTable#enum_as_string}

---

### BigqueryTableMaterializedView <a name="BigqueryTableMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableMaterializedView {
    string Query,
    object AllowNonIncrementalDefinition = null,
    object EnableRefresh = null,
    double RefreshIntervalMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query">Query</a></code> | <code>string</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>object</code> | Allow non incremental materialized view definition. The default value is false. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh">EnableRefresh</a></code> | <code>object</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>double</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `AllowNonIncrementalDefinition`<sup>Optional</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition"></a>

```csharp
public object AllowNonIncrementalDefinition { get; set; }
```

- *Type:* object

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#allow_non_incremental_definition BigqueryTable#allow_non_incremental_definition}

---

##### `EnableRefresh`<sup>Optional</sup> <a name="EnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh"></a>

```csharp
public object EnableRefresh { get; set; }
```

- *Type:* object

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

##### `RefreshIntervalMs`<sup>Optional</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```csharp
public double RefreshIntervalMs { get; set; }
```

- *Type:* double

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

---

### BigqueryTableRangePartitioning <a name="BigqueryTableRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableRangePartitioning {
    string Field,
    BigqueryTableRangePartitioningRange Range
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field">Field</a></code> | <code>string</code> | The field used to determine how to create a range-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | range block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range"></a>

```csharp
public BigqueryTableRangePartitioningRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

### BigqueryTableRangePartitioningRange <a name="BigqueryTableRangePartitioningRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableRangePartitioningRange {
    double End,
    double Interval,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end">End</a></code> | <code>double</code> | End of the range partitioning, exclusive. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval">Interval</a></code> | <code>double</code> | The width of each range within the partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start">Start</a></code> | <code>double</code> | Start of the range partitioning, inclusive. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#start BigqueryTable#start}

---

### BigqueryTableTableConstraints <a name="BigqueryTableTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraints {
    object ForeignKeys = null,
    BigqueryTableTableConstraintsPrimaryKey PrimaryKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys">ForeignKeys</a></code> | <code>object</code> | foreign_keys block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | primary_key block. |

---

##### `ForeignKeys`<sup>Optional</sup> <a name="ForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys"></a>

```csharp
public object ForeignKeys { get; set; }
```

- *Type:* object

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#foreign_keys BigqueryTable#foreign_keys}

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey"></a>

```csharp
public BigqueryTableTableConstraintsPrimaryKey PrimaryKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#primary_key BigqueryTable#primary_key}

---

### BigqueryTableTableConstraintsForeignKeys <a name="BigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeys {
    BigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferences,
    BigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTable,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | column_references block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | referenced_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name">Name</a></code> | <code>string</code> | Set only if the foreign key constraint is named. |

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

column_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#column_references BigqueryTable#column_references}

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

referenced_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#referenced_table BigqueryTable#referenced_table}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Set only if the foreign key constraint is named.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#name BigqueryTable#name}

---

### BigqueryTableTableConstraintsForeignKeysColumnReferences <a name="BigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysColumnReferences {
    string ReferencedColumn,
    string ReferencingColumn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn">ReferencedColumn</a></code> | <code>string</code> | The column in the primary key that are referenced by the referencingColumn. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn">ReferencingColumn</a></code> | <code>string</code> | The column that composes the foreign key. |

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn"></a>

```csharp
public string ReferencedColumn { get; set; }
```

- *Type:* string

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#referenced_column BigqueryTable#referenced_column}

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn"></a>

```csharp
public string ReferencingColumn { get; set; }
```

- *Type:* string

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#referencing_column BigqueryTable#referencing_column}

---

### BigqueryTableTableConstraintsForeignKeysReferencedTable <a name="BigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysReferencedTable {
    string DatasetId,
    string ProjectId,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId">TableId</a></code> | <code>string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#project_id BigqueryTable#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

### BigqueryTableTableConstraintsPrimaryKey <a name="BigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsPrimaryKey {
    string[] Columns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns">Columns</a></code> | <code>string[]</code> | The columns that are composed of the primary key constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#columns BigqueryTable#columns}

---

### BigqueryTableTableReplicationInfo <a name="BigqueryTableTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableReplicationInfo {
    string SourceDatasetId,
    string SourceProjectId,
    string SourceTableId,
    double ReplicationIntervalMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId">SourceDatasetId</a></code> | <code>string</code> | The ID of the source dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId">SourceProjectId</a></code> | <code>string</code> | The ID of the source project. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId">SourceTableId</a></code> | <code>string</code> | The ID of the source materialized view. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>double</code> | The interval at which the source materialized view is polled for updates. The default is 300000. |

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId"></a>

```csharp
public string SourceDatasetId { get; set; }
```

- *Type:* string

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_dataset_id BigqueryTable#source_dataset_id}

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId"></a>

```csharp
public string SourceProjectId { get; set; }
```

- *Type:* string

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_project_id BigqueryTable#source_project_id}

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId"></a>

```csharp
public string SourceTableId { get; set; }
```

- *Type:* string

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#source_table_id BigqueryTable#source_table_id}

---

##### `ReplicationIntervalMs`<sup>Optional</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs"></a>

```csharp
public double ReplicationIntervalMs { get; set; }
```

- *Type:* double

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#replication_interval_ms BigqueryTable#replication_interval_ms}

---

### BigqueryTableTimePartitioning <a name="BigqueryTableTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTimePartitioning {
    string Type,
    double ExpirationMs = null,
    string Field = null,
    object RequirePartitionFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type">Type</a></code> | <code>string</code> | The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs">ExpirationMs</a></code> | <code>double</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field">Field</a></code> | <code>string</code> | The field used to determine how to create a time-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs"></a>

```csharp
public double ExpirationMs { get; set; }
```

- *Type:* double

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

### BigqueryTableView <a name="BigqueryTableView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableView {
    string Query,
    object UseLegacySql = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query">Query</a></code> | <code>string</code> | A query that BigQuery executes when the view is referenced. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | Specifies whether to use BigQuery's legacy SQL for this view. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `UseLegacySql`<sup>Optional</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; set; }
```

- *Type:* object

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryTableBiglakeConfigurationOutputReference <a name="BigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableBiglakeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput">TableFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.storageUri">StorageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">TableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput"></a>

```csharp
public string FileFormatInput { get; }
```

- *Type:* string

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput"></a>

```csharp
public string StorageUriInput { get; }
```

- *Type:* string

---

##### `TableFormatInput`<sup>Optional</sup> <a name="TableFormatInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput"></a>

```csharp
public string TableFormatInput { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```csharp
public string StorageUri { get; }
```

- *Type:* string

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```csharp
public string TableFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableBiglakeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableBiglakeConfiguration">BigqueryTableBiglakeConfiguration</a>

---


### BigqueryTableEncryptionConfigurationOutputReference <a name="BigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---


### BigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationAvroOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput">UseAvroLogicalTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseAvroLogicalTypesInput`<sup>Optional</sup> <a name="UseAvroLogicalTypesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput"></a>

```csharp
public object UseAvroLogicalTypesInput { get; }
```

- *Type:* object

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationAvroOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---


### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```csharp
private BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest">ResetOnlyReadLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded">ResetQualifierEncoded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString">ResetQualifierString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetOnlyReadLatest` <a name="ResetOnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest"></a>

```csharp
private void ResetOnlyReadLatest()
```

##### `ResetQualifierEncoded` <a name="ResetQualifierEncoded" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded"></a>

```csharp
private void ResetQualifierEncoded()
```

##### `ResetQualifierString` <a name="ResetQualifierString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString"></a>

```csharp
private void ResetQualifierString()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput">OnlyReadLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput">QualifierEncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput">QualifierStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">QualifierEncoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">QualifierString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `OnlyReadLatestInput`<sup>Optional</sup> <a name="OnlyReadLatestInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput"></a>

```csharp
public object OnlyReadLatestInput { get; }
```

- *Type:* object

---

##### `QualifierEncodedInput`<sup>Optional</sup> <a name="QualifierEncodedInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput"></a>

```csharp
public string QualifierEncodedInput { get; }
```

- *Type:* string

---

##### `QualifierStringInput`<sup>Optional</sup> <a name="QualifierStringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput"></a>

```csharp
public string QualifierStringInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; }
```

- *Type:* object

---

##### `QualifierEncoded`<sup>Required</sup> <a name="QualifierEncoded" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```csharp
public string QualifierEncoded { get; }
```

- *Type:* string

---

##### `QualifierString`<sup>Required</sup> <a name="QualifierString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```csharp
public string QualifierString { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```csharp
private BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId">ResetFamilyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest">ResetOnlyReadLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn"></a>

```csharp
private void PutColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn.parameter.value"></a>

- *Type:* object

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFamilyId` <a name="ResetFamilyId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId"></a>

```csharp
private void ResetFamilyId()
```

##### `ResetOnlyReadLatest` <a name="ResetOnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest"></a>

```csharp
private void ResetOnlyReadLatest()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput">FamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput">OnlyReadLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">FamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FamilyIdInput`<sup>Optional</sup> <a name="FamilyIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput"></a>

```csharp
public string FamilyIdInput { get; }
```

- *Type:* string

---

##### `OnlyReadLatestInput`<sup>Optional</sup> <a name="OnlyReadLatestInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput"></a>

```csharp
public object OnlyReadLatestInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FamilyId`<sup>Required</sup> <a name="FamilyId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```csharp
public string FamilyId { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily">PutColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily">ResetColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies">ResetIgnoreUnspecifiedColumnFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson">ResetOutputColumnFamiliesAsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString">ResetReadRowkeyAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnFamily` <a name="PutColumnFamily" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily"></a>

```csharp
private void PutColumnFamily(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily.parameter.value"></a>

- *Type:* object

---

##### `ResetColumnFamily` <a name="ResetColumnFamily" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily"></a>

```csharp
private void ResetColumnFamily()
```

##### `ResetIgnoreUnspecifiedColumnFamilies` <a name="ResetIgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies"></a>

```csharp
private void ResetIgnoreUnspecifiedColumnFamilies()
```

##### `ResetOutputColumnFamiliesAsJson` <a name="ResetOutputColumnFamiliesAsJson" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson"></a>

```csharp
private void ResetOutputColumnFamiliesAsJson()
```

##### `ResetReadRowkeyAsString` <a name="ResetReadRowkeyAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString"></a>

```csharp
private void ResetReadRowkeyAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput">IgnoreUnspecifiedColumnFamiliesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput">OutputColumnFamiliesAsJsonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput">ReadRowkeyAsStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList ColumnFamily { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">BigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput"></a>

```csharp
public object ColumnFamilyInput { get; }
```

- *Type:* object

---

##### `IgnoreUnspecifiedColumnFamiliesInput`<sup>Optional</sup> <a name="IgnoreUnspecifiedColumnFamiliesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput"></a>

```csharp
public object IgnoreUnspecifiedColumnFamiliesInput { get; }
```

- *Type:* object

---

##### `OutputColumnFamiliesAsJsonInput`<sup>Optional</sup> <a name="OutputColumnFamiliesAsJsonInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput"></a>

```csharp
public object OutputColumnFamiliesAsJsonInput { get; }
```

- *Type:* object

---

##### `ReadRowkeyAsStringInput`<sup>Optional</sup> <a name="ReadRowkeyAsStringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput"></a>

```csharp
public object ReadRowkeyAsStringInput { get; }
```

- *Type:* object

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Required</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```csharp
public object IgnoreUnspecifiedColumnFamilies { get; }
```

- *Type:* object

---

##### `OutputColumnFamiliesAsJson`<sup>Required</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```csharp
public object OutputColumnFamiliesAsJson { get; }
```

- *Type:* object

---

##### `ReadRowkeyAsString`<sup>Required</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```csharp
public object ReadRowkeyAsString { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### BigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationCsvOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows">ResetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines">ResetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowJaggedRows` <a name="ResetAllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows"></a>

```csharp
private void ResetAllowJaggedRows()
```

##### `ResetAllowQuotedNewlines` <a name="ResetAllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines"></a>

```csharp
private void ResetAllowQuotedNewlines()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows"></a>

```csharp
private void ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput">AllowJaggedRowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput">AllowQuotedNewlinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput">QuoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowJaggedRowsInput`<sup>Optional</sup> <a name="AllowJaggedRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput"></a>

```csharp
public object AllowJaggedRowsInput { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlinesInput`<sup>Optional</sup> <a name="AllowQuotedNewlinesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput"></a>

```csharp
public object AllowQuotedNewlinesInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput"></a>

```csharp
public string QuoteInput { get; }
```

- *Type:* string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput"></a>

```csharp
public double SkipLeadingRowsInput { get; }
```

- *Type:* double

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; }
```

- *Type:* object

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```csharp
public string Quote { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationCsvOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---


### BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows"></a>

```csharp
private void ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput"></a>

```csharp
public double SkipLeadingRowsInput { get; }
```

- *Type:* double

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationGoogleSheetsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix">ResetSourceUriPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```

##### `ResetSourceUriPrefix` <a name="ResetSourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix"></a>

```csharp
private void ResetSourceUriPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput">SourceUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `SourceUriPrefixInput`<sup>Optional</sup> <a name="SourceUriPrefixInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput"></a>

```csharp
public string SourceUriPrefixInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `SourceUriPrefix`<sup>Required</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```csharp
public string SourceUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationHivePartitioningOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### BigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationJsonOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationJsonOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---


### BigqueryTableExternalDataConfigurationOutputReference <a name="BigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions">PutAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions">PutBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions">PutGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions">PutHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions">PutParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">ResetAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions">ResetBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType">ResetFileSetSpecType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">ResetGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">ResetHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">ResetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension">ResetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">ResetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode">ResetMetadataCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata">ResetObjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions">ResetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">ResetReferenceFileSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroOptions` <a name="PutAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions"></a>

```csharp
private void PutAvroOptions(BigqueryTableExternalDataConfigurationAvroOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `PutBigtableOptions` <a name="PutBigtableOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions"></a>

```csharp
private void PutBigtableOptions(BigqueryTableExternalDataConfigurationBigtableOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a>

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions"></a>

```csharp
private void PutCsvOptions(BigqueryTableExternalDataConfigurationCsvOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `PutGoogleSheetsOptions` <a name="PutGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions"></a>

```csharp
private void PutGoogleSheetsOptions(BigqueryTableExternalDataConfigurationGoogleSheetsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `PutHivePartitioningOptions` <a name="PutHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions"></a>

```csharp
private void PutHivePartitioningOptions(BigqueryTableExternalDataConfigurationHivePartitioningOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions"></a>

```csharp
private void PutJsonOptions(BigqueryTableExternalDataConfigurationJsonOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `PutParquetOptions` <a name="PutParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions"></a>

```csharp
private void PutParquetOptions(BigqueryTableExternalDataConfigurationParquetOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ResetAvroOptions` <a name="ResetAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions"></a>

```csharp
private void ResetAvroOptions()
```

##### `ResetBigtableOptions` <a name="ResetBigtableOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions"></a>

```csharp
private void ResetBigtableOptions()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions"></a>

```csharp
private void ResetCsvOptions()
```

##### `ResetFileSetSpecType` <a name="ResetFileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType"></a>

```csharp
private void ResetFileSetSpecType()
```

##### `ResetGoogleSheetsOptions` <a name="ResetGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions"></a>

```csharp
private void ResetGoogleSheetsOptions()
```

##### `ResetHivePartitioningOptions` <a name="ResetHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions"></a>

```csharp
private void ResetHivePartitioningOptions()
```

##### `ResetIgnoreUnknownValues` <a name="ResetIgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues"></a>

```csharp
private void ResetIgnoreUnknownValues()
```

##### `ResetJsonExtension` <a name="ResetJsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension"></a>

```csharp
private void ResetJsonExtension()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions"></a>

```csharp
private void ResetJsonOptions()
```

##### `ResetMaxBadRecords` <a name="ResetMaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```csharp
private void ResetMaxBadRecords()
```

##### `ResetMetadataCacheMode` <a name="ResetMetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode"></a>

```csharp
private void ResetMetadataCacheMode()
```

##### `ResetObjectMetadata` <a name="ResetObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata"></a>

```csharp
private void ResetObjectMetadata()
```

##### `ResetParquetOptions` <a name="ResetParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions"></a>

```csharp
private void ResetParquetOptions()
```

##### `ResetReferenceFileSchemaUri` <a name="ResetReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```csharp
private void ResetReferenceFileSchemaUri()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat"></a>

```csharp
private void ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">AutodetectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">AvroOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput">BigtableOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput">FileSetSpecTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">GoogleSheetsOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">HivePartitioningOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">IgnoreUnknownValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput">JsonExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">MaxBadRecordsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput">MetadataCacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput">ObjectMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput">ParquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">ReferenceFileSchemaUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">SourceUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect">Autodetect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">FileSetSpecType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">ObjectMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvroOptions`<sup>Required</sup> <a name="AvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationAvroOptionsOutputReference AvroOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a>

---

##### `BigtableOptions`<sup>Required</sup> <a name="BigtableOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference BigtableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">BigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a>

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationCsvOptionsOutputReference CsvOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a>

---

##### `GoogleSheetsOptions`<sup>Required</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference GoogleSheetsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a>

---

##### `HivePartitioningOptions`<sup>Required</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference HivePartitioningOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationJsonOptionsOutputReference JsonOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a>

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```csharp
public BigqueryTableExternalDataConfigurationParquetOptionsOutputReference ParquetOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a>

---

##### `AutodetectInput`<sup>Optional</sup> <a name="AutodetectInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput"></a>

```csharp
public object AutodetectInput { get; }
```

- *Type:* object

---

##### `AvroOptionsInput`<sup>Optional</sup> <a name="AvroOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationAvroOptions AvroOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `BigtableOptionsInput`<sup>Optional</sup> <a name="BigtableOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationBigtableOptions BigtableOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationBigtableOptions">BigqueryTableExternalDataConfigurationBigtableOptions</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationCsvOptions CsvOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `FileSetSpecTypeInput`<sup>Optional</sup> <a name="FileSetSpecTypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput"></a>

```csharp
public string FileSetSpecTypeInput { get; }
```

- *Type:* string

---

##### `GoogleSheetsOptionsInput`<sup>Optional</sup> <a name="GoogleSheetsOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `HivePartitioningOptionsInput`<sup>Optional</sup> <a name="HivePartitioningOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `IgnoreUnknownValuesInput`<sup>Optional</sup> <a name="IgnoreUnknownValuesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput"></a>

```csharp
public object IgnoreUnknownValuesInput { get; }
```

- *Type:* object

---

##### `JsonExtensionInput`<sup>Optional</sup> <a name="JsonExtensionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput"></a>

```csharp
public string JsonExtensionInput { get; }
```

- *Type:* string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationJsonOptions JsonOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `MaxBadRecordsInput`<sup>Optional</sup> <a name="MaxBadRecordsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```csharp
public double MaxBadRecordsInput { get; }
```

- *Type:* double

---

##### `MetadataCacheModeInput`<sup>Optional</sup> <a name="MetadataCacheModeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput"></a>

```csharp
public string MetadataCacheModeInput { get; }
```

- *Type:* string

---

##### `ObjectMetadataInput`<sup>Optional</sup> <a name="ObjectMetadataInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput"></a>

```csharp
public string ObjectMetadataInput { get; }
```

- *Type:* string

---

##### `ParquetOptionsInput`<sup>Optional</sup> <a name="ParquetOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput"></a>

```csharp
public BigqueryTableExternalDataConfigurationParquetOptions ParquetOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ReferenceFileSchemaUriInput`<sup>Optional</sup> <a name="ReferenceFileSchemaUriInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput"></a>

```csharp
public string ReferenceFileSchemaUriInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `SourceUrisInput`<sup>Optional</sup> <a name="SourceUrisInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput"></a>

```csharp
public string[] SourceUrisInput { get; }
```

- *Type:* string[]

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```csharp
public object Autodetect { get; }
```

- *Type:* object

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `FileSetSpecType`<sup>Required</sup> <a name="FileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```csharp
public string FileSetSpecType { get; }
```

- *Type:* string

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; }
```

- *Type:* object

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; }
```

- *Type:* string

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; }
```

- *Type:* double

---

##### `MetadataCacheMode`<sup>Required</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```csharp
public string MetadataCacheMode { get; }
```

- *Type:* string

---

##### `ObjectMetadata`<sup>Required</sup> <a name="ObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```csharp
public string ObjectMetadata { get; }
```

- *Type:* string

---

##### `ReferenceFileSchemaUri`<sup>Required</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```csharp
public string ReferenceFileSchemaUri { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---


### BigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableExternalDataConfigurationParquetOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference">ResetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString">ResetEnumAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableListInference` <a name="ResetEnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference"></a>

```csharp
private void ResetEnableListInference()
```

##### `ResetEnumAsString` <a name="ResetEnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString"></a>

```csharp
private void ResetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput">EnableListInferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput">EnumAsStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableListInferenceInput`<sup>Optional</sup> <a name="EnableListInferenceInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```csharp
public object EnableListInferenceInput { get; }
```

- *Type:* object

---

##### `EnumAsStringInput`<sup>Optional</sup> <a name="EnumAsStringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput"></a>

```csharp
public object EnumAsStringInput { get; }
```

- *Type:* object

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```csharp
public object EnableListInference { get; }
```

- *Type:* object

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```csharp
public object EnumAsString { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableExternalDataConfigurationParquetOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---


### BigqueryTableMaterializedViewOutputReference <a name="BigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableMaterializedViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition">ResetAllowNonIncrementalDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh">ResetEnableRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs">ResetRefreshIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowNonIncrementalDefinition` <a name="ResetAllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition"></a>

```csharp
private void ResetAllowNonIncrementalDefinition()
```

##### `ResetEnableRefresh` <a name="ResetEnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh"></a>

```csharp
private void ResetEnableRefresh()
```

##### `ResetRefreshIntervalMs` <a name="ResetRefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs"></a>

```csharp
private void ResetRefreshIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput">AllowNonIncrementalDefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">EnableRefreshInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">RefreshIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh">EnableRefresh</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowNonIncrementalDefinitionInput`<sup>Optional</sup> <a name="AllowNonIncrementalDefinitionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput"></a>

```csharp
public object AllowNonIncrementalDefinitionInput { get; }
```

- *Type:* object

---

##### `EnableRefreshInput`<sup>Optional</sup> <a name="EnableRefreshInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput"></a>

```csharp
public object EnableRefreshInput { get; }
```

- *Type:* object

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RefreshIntervalMsInput`<sup>Optional</sup> <a name="RefreshIntervalMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput"></a>

```csharp
public double RefreshIntervalMsInput { get; }
```

- *Type:* double

---

##### `AllowNonIncrementalDefinition`<sup>Required</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```csharp
public object AllowNonIncrementalDefinition { get; }
```

- *Type:* object

---

##### `EnableRefresh`<sup>Required</sup> <a name="EnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```csharp
public object EnableRefresh { get; }
```

- *Type:* object

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RefreshIntervalMs`<sup>Required</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```csharp
public double RefreshIntervalMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableMaterializedView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---


### BigqueryTableRangePartitioningOutputReference <a name="BigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableRangePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange"></a>

```csharp
private void PutRange(BigqueryTableRangePartitioningRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range"></a>

```csharp
public BigqueryTableRangePartitioningRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput"></a>

```csharp
public BigqueryTableRangePartitioningRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableRangePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---


### BigqueryTableRangePartitioningRangeOutputReference <a name="BigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableRangePartitioningRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableRangePartitioningRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---


### BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput">ReferencedColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput">ReferencingColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">ReferencedColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">ReferencingColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferencedColumnInput`<sup>Optional</sup> <a name="ReferencedColumnInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput"></a>

```csharp
public string ReferencedColumnInput { get; }
```

- *Type:* string

---

##### `ReferencingColumnInput`<sup>Optional</sup> <a name="ReferencingColumnInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput"></a>

```csharp
public string ReferencingColumnInput { get; }
```

- *Type:* string

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```csharp
public string ReferencedColumn { get; }
```

- *Type:* string

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```csharp
public string ReferencingColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysColumnReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### BigqueryTableTableConstraintsForeignKeysList <a name="BigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get"></a>

```csharp
private BigqueryTableTableConstraintsForeignKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableTableConstraintsForeignKeysOutputReference <a name="BigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences">PutColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable">PutReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnReferences` <a name="PutColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences"></a>

```csharp
private void PutColumnReferences(BigqueryTableTableConstraintsForeignKeysColumnReferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `PutReferencedTable` <a name="PutReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable"></a>

```csharp
private void PutReferencedTable(BigqueryTableTableConstraintsForeignKeysReferencedTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput">ColumnReferencesInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput">ReferencedTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference ColumnReferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a>

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference ReferencedTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a>

---

##### `ColumnReferencesInput`<sup>Optional</sup> <a name="ColumnReferencesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReferencedTableInput`<sup>Optional</sup> <a name="ReferencedTableInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysReferencedTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### BigqueryTableTableConstraintsOutputReference <a name="BigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys">PutForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys">ResetForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignKeys` <a name="PutForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys"></a>

```csharp
private void PutForeignKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys.parameter.value"></a>

- *Type:* object

---

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey"></a>

```csharp
private void PutPrimaryKey(BigqueryTableTableConstraintsPrimaryKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---

##### `ResetForeignKeys` <a name="ResetForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys"></a>

```csharp
private void ResetForeignKeys()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys">ForeignKeys</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput">ForeignKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForeignKeys`<sup>Required</sup> <a name="ForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```csharp
public BigqueryTableTableConstraintsForeignKeysList ForeignKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```csharp
public BigqueryTableTableConstraintsPrimaryKeyOutputReference PrimaryKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a>

---

##### `ForeignKeysInput`<sup>Optional</sup> <a name="ForeignKeysInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput"></a>

```csharp
public object ForeignKeysInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput"></a>

```csharp
public BigqueryTableTableConstraintsPrimaryKey PrimaryKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTableConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---


### BigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="BigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableConstraintsPrimaryKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTableConstraintsPrimaryKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---


### BigqueryTableTableReplicationInfoOutputReference <a name="BigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTableReplicationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs">ResetReplicationIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationIntervalMs` <a name="ResetReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs"></a>

```csharp
private void ResetReplicationIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput">ReplicationIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput">SourceDatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput">SourceProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput">SourceTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">SourceDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">SourceProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">SourceTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationIntervalMsInput`<sup>Optional</sup> <a name="ReplicationIntervalMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput"></a>

```csharp
public double ReplicationIntervalMsInput { get; }
```

- *Type:* double

---

##### `SourceDatasetIdInput`<sup>Optional</sup> <a name="SourceDatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput"></a>

```csharp
public string SourceDatasetIdInput { get; }
```

- *Type:* string

---

##### `SourceProjectIdInput`<sup>Optional</sup> <a name="SourceProjectIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput"></a>

```csharp
public string SourceProjectIdInput { get; }
```

- *Type:* string

---

##### `SourceTableIdInput`<sup>Optional</sup> <a name="SourceTableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput"></a>

```csharp
public string SourceTableIdInput { get; }
```

- *Type:* string

---

##### `ReplicationIntervalMs`<sup>Required</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```csharp
public double ReplicationIntervalMs { get; }
```

- *Type:* double

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```csharp
public string SourceDatasetId { get; }
```

- *Type:* string

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```csharp
public string SourceProjectId { get; }
```

- *Type:* string

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```csharp
public string SourceTableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTableReplicationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---


### BigqueryTableTimePartitioningOutputReference <a name="BigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableTimePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs"></a>

```csharp
private void ResetExpirationMs()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput"></a>

```csharp
public double ExpirationMsInput { get; }
```

- *Type:* double

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```csharp
public double ExpirationMs { get; }
```

- *Type:* double

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableTimePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---


### BigqueryTableViewOutputReference <a name="BigqueryTableViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryTableViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql">ResetUseLegacySql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseLegacySql` <a name="ResetUseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql"></a>

```csharp
private void ResetUseLegacySql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput">UseLegacySqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `UseLegacySqlInput`<sup>Optional</sup> <a name="UseLegacySqlInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput"></a>

```csharp
public object UseLegacySqlInput { get; }
```

- *Type:* object

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue"></a>

```csharp
public BigqueryTableView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---



