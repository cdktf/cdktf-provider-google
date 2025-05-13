# `sqlDatabaseInstance` Submodule <a name="`sqlDatabaseInstance` Submodule" id="@cdktf/provider-google.sqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabaseInstance <a name="SqlDatabaseInstance" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstance(Construct Scope, string Id, SqlDatabaseInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone">PutClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration">PutReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicationCluster">PutReplicationCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext">PutRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone">ResetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName">ResetEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion">ResetMaintenanceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName">ResetMasterInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration">ResetReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaNames">ResetReplicaNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicationCluster">ResetReplicationCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext">ResetRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword">ResetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone"></a>

```csharp
private void PutClone(SqlDatabaseInstanceClone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `PutReplicaConfiguration` <a name="PutReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration"></a>

```csharp
private void PutReplicaConfiguration(SqlDatabaseInstanceReplicaConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `PutReplicationCluster` <a name="PutReplicationCluster" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicationCluster"></a>

```csharp
private void PutReplicationCluster(SqlDatabaseInstanceReplicationCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicationCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a>

---

##### `PutRestoreBackupContext` <a name="PutRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext"></a>

```csharp
private void PutRestoreBackupContext(SqlDatabaseInstanceRestoreBackupContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings"></a>

```csharp
private void PutSettings(SqlDatabaseInstanceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(SqlDatabaseInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone"></a>

```csharp
private void ResetClone()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetEncryptionKeyName` <a name="ResetEncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName"></a>

```csharp
private void ResetEncryptionKeyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetMaintenanceVersion` <a name="ResetMaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion"></a>

```csharp
private void ResetMaintenanceVersion()
```

##### `ResetMasterInstanceName` <a name="ResetMasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName"></a>

```csharp
private void ResetMasterInstanceName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicaConfiguration` <a name="ResetReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration"></a>

```csharp
private void ResetReplicaConfiguration()
```

##### `ResetReplicaNames` <a name="ResetReplicaNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaNames"></a>

```csharp
private void ResetReplicaNames()
```

##### `ResetReplicationCluster` <a name="ResetReplicationCluster" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicationCluster"></a>

```csharp
private void ResetReplicationCluster()
```

##### `ResetRestoreBackupContext` <a name="ResetRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext"></a>

```csharp
private void ResetRestoreBackupContext()
```

##### `ResetRootPassword` <a name="ResetRootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword"></a>

```csharp
private void ResetRootPassword()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlDatabaseInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlDatabaseInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlDatabaseInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlDatabaseInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlDatabaseInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions">AvailableMaintenanceVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsNames">DnsNames</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList">SqlDatabaseInstanceDnsNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress">FirstIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink">PscServiceAttachmentLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicationCluster">ReplicationCluster</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference">SqlDatabaseInstanceReplicationClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert">ServerCaCert</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress">ServiceAccountEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput">EncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput">MaintenanceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput">MasterInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput">ReplicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaNamesInput">ReplicaNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicationClusterInput">ReplicationClusterInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput">RestoreBackupContextInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput">RootPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName">MasterInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaNames">ReplicaNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword">RootPassword</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailableMaintenanceVersions`<sup>Required</sup> <a name="AvailableMaintenanceVersions" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```csharp
public string[] AvailableMaintenanceVersions { get; }
```

- *Type:* string[]

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone"></a>

```csharp
public SqlDatabaseInstanceCloneOutputReference Clone { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsNames"></a>

```csharp
public SqlDatabaseInstanceDnsNamesList DnsNames { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList">SqlDatabaseInstanceDnsNamesList</a>

---

##### `FirstIpAddress`<sup>Required</sup> <a name="FirstIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress"></a>

```csharp
public string FirstIpAddress { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress"></a>

```csharp
public SqlDatabaseInstanceIpAddressList IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PscServiceAttachmentLink`<sup>Required</sup> <a name="PscServiceAttachmentLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```csharp
public string PscServiceAttachmentLink { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration"></a>

```csharp
public SqlDatabaseInstanceReplicaConfigurationOutputReference ReplicaConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a>

---

##### `ReplicationCluster`<sup>Required</sup> <a name="ReplicationCluster" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicationCluster"></a>

```csharp
public SqlDatabaseInstanceReplicationClusterOutputReference ReplicationCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference">SqlDatabaseInstanceReplicationClusterOutputReference</a>

---

##### `RestoreBackupContext`<sup>Required</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext"></a>

```csharp
public SqlDatabaseInstanceRestoreBackupContextOutputReference RestoreBackupContext { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServerCaCert`<sup>Required</sup> <a name="ServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert"></a>

```csharp
public SqlDatabaseInstanceServerCaCertList ServerCaCert { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a>

---

##### `ServiceAccountEmailAddress`<sup>Required</sup> <a name="ServiceAccountEmailAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```csharp
public string ServiceAccountEmailAddress { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings"></a>

```csharp
public SqlDatabaseInstanceSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts"></a>

```csharp
public SqlDatabaseInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a>

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput"></a>

```csharp
public SqlDatabaseInstanceClone CloneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput"></a>

```csharp
public string DatabaseVersionInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `EncryptionKeyNameInput`<sup>Optional</sup> <a name="EncryptionKeyNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput"></a>

```csharp
public string EncryptionKeyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MaintenanceVersionInput`<sup>Optional</sup> <a name="MaintenanceVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput"></a>

```csharp
public string MaintenanceVersionInput { get; }
```

- *Type:* string

---

##### `MasterInstanceNameInput`<sup>Optional</sup> <a name="MasterInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput"></a>

```csharp
public string MasterInstanceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicaConfigurationInput`<sup>Optional</sup> <a name="ReplicaConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput"></a>

```csharp
public SqlDatabaseInstanceReplicaConfiguration ReplicaConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `ReplicaNamesInput`<sup>Optional</sup> <a name="ReplicaNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaNamesInput"></a>

```csharp
public string[] ReplicaNamesInput { get; }
```

- *Type:* string[]

---

##### `ReplicationClusterInput`<sup>Optional</sup> <a name="ReplicationClusterInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicationClusterInput"></a>

```csharp
public SqlDatabaseInstanceReplicationCluster ReplicationClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a>

---

##### `RestoreBackupContextInput`<sup>Optional</sup> <a name="RestoreBackupContextInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput"></a>

```csharp
public SqlDatabaseInstanceRestoreBackupContext RestoreBackupContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `RootPasswordInput`<sup>Optional</sup> <a name="RootPasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput"></a>

```csharp
public string RootPasswordInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput"></a>

```csharp
public SqlDatabaseInstanceSettings SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `EncryptionKeyName`<sup>Required</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName"></a>

```csharp
public string EncryptionKeyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MaintenanceVersion`<sup>Required</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion"></a>

```csharp
public string MaintenanceVersion { get; }
```

- *Type:* string

---

##### `MasterInstanceName`<sup>Required</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName"></a>

```csharp
public string MasterInstanceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicaNames`<sup>Required</sup> <a name="ReplicaNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaNames"></a>

```csharp
public string[] ReplicaNames { get; }
```

- *Type:* string[]

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword"></a>

```csharp
public string RootPassword { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseInstanceClone <a name="SqlDatabaseInstanceClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceClone {
    string SourceInstanceName,
    string AllocatedIpRange = null,
    string[] DatabaseNames = null,
    string PointInTime = null,
    string PreferredZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName">SourceInstanceName</a></code> | <code>string</code> | The name of the instance from which the point in time should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames">DatabaseNames</a></code> | <code>string[]</code> | (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime">PointInTime</a></code> | <code>string</code> | The timestamp of the point in time that should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone">PreferredZone</a></code> | <code>string</code> | (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. |

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName"></a>

```csharp
public string SourceInstanceName { get; set; }
```

- *Type:* string

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#source_instance_name SqlDatabaseInstance#source_instance_name}

---

##### `AllocatedIpRange`<sup>Optional</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; set; }
```

- *Type:* string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `DatabaseNames`<sup>Optional</sup> <a name="DatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames"></a>

```csharp
public string[] DatabaseNames { get; set; }
```

- *Type:* string[]

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#database_names SqlDatabaseInstance#database_names}

---

##### `PointInTime`<sup>Optional</sup> <a name="PointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime"></a>

```csharp
public string PointInTime { get; set; }
```

- *Type:* string

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#point_in_time SqlDatabaseInstance#point_in_time}

---

##### `PreferredZone`<sup>Optional</sup> <a name="PreferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone"></a>

```csharp
public string PreferredZone { get; set; }
```

- *Type:* string

(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone.

If no zone is specified, clone to the same zone as the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#preferred_zone SqlDatabaseInstance#preferred_zone}

---

### SqlDatabaseInstanceConfig <a name="SqlDatabaseInstanceConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseVersion,
    SqlDatabaseInstanceClone Clone = null,
    object DeletionProtection = null,
    string EncryptionKeyName = null,
    string Id = null,
    string InstanceType = null,
    string MaintenanceVersion = null,
    string MasterInstanceName = null,
    string Name = null,
    string Project = null,
    string Region = null,
    SqlDatabaseInstanceReplicaConfiguration ReplicaConfiguration = null,
    string[] ReplicaNames = null,
    SqlDatabaseInstanceReplicationCluster ReplicationCluster = null,
    SqlDatabaseInstanceRestoreBackupContext RestoreBackupContext = null,
    string RootPassword = null,
    SqlDatabaseInstanceSettings Settings = null,
    SqlDatabaseInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>string</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName">MasterInstanceName</a></code> | <code>string</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region">Region</a></code> | <code>string</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaNames">ReplicaNames</a></code> | <code>string[]</code> | The replicas of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicationCluster">ReplicationCluster</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a></code> | replication_cluster block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword">RootPassword</a></code> | <code>string</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; set; }
```

- *Type:* string

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#database_version SqlDatabaseInstance#database_version}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone"></a>

```csharp
public SqlDatabaseInstanceClone Clone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#clone SqlDatabaseInstance#clone}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}

---

##### `EncryptionKeyName`<sup>Optional</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName"></a>

```csharp
public string EncryptionKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#instance_type SqlDatabaseInstance#instance_type}

---

##### `MaintenanceVersion`<sup>Optional</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion"></a>

```csharp
public string MaintenanceVersion { get; set; }
```

- *Type:* string

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#maintenance_version SqlDatabaseInstance#maintenance_version}

---

##### `MasterInstanceName`<sup>Optional</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName"></a>

```csharp
public string MasterInstanceName { get; set; }
```

- *Type:* string

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#region SqlDatabaseInstance#region}

---

##### `ReplicaConfiguration`<sup>Optional</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration"></a>

```csharp
public SqlDatabaseInstanceReplicaConfiguration ReplicaConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}

---

##### `ReplicaNames`<sup>Optional</sup> <a name="ReplicaNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaNames"></a>

```csharp
public string[] ReplicaNames { get; set; }
```

- *Type:* string[]

The replicas of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#replica_names SqlDatabaseInstance#replica_names}

---

##### `ReplicationCluster`<sup>Optional</sup> <a name="ReplicationCluster" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicationCluster"></a>

```csharp
public SqlDatabaseInstanceReplicationCluster ReplicationCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a>

replication_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#replication_cluster SqlDatabaseInstance#replication_cluster}

---

##### `RestoreBackupContext`<sup>Optional</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext"></a>

```csharp
public SqlDatabaseInstanceRestoreBackupContext RestoreBackupContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}

---

##### `RootPassword`<sup>Optional</sup> <a name="RootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword"></a>

```csharp
public string RootPassword { get; set; }
```

- *Type:* string

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#root_password SqlDatabaseInstance#root_password}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings"></a>

```csharp
public SqlDatabaseInstanceSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#settings SqlDatabaseInstance#settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts"></a>

```csharp
public SqlDatabaseInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}

---

### SqlDatabaseInstanceDnsNames <a name="SqlDatabaseInstanceDnsNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceDnsNames {

};
```


### SqlDatabaseInstanceIpAddress <a name="SqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceIpAddress {

};
```


### SqlDatabaseInstanceReplicaConfiguration <a name="SqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceReplicaConfiguration {
    string CaCertificate = null,
    object CascadableReplica = null,
    string ClientCertificate = null,
    string ClientKey = null,
    double ConnectRetryInterval = null,
    string DumpFilePath = null,
    object FailoverTarget = null,
    double MasterHeartbeatPeriod = null,
    string Password = null,
    string SslCipher = null,
    string Username = null,
    object VerifyServerCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate">CaCertificate</a></code> | <code>string</code> | PEM representation of the trusted CA's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.cascadableReplica">CascadableReplica</a></code> | <code>object</code> | Specifies if a SQL Server replica is a cascadable replica. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | PEM representation of the replica's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey">ClientKey</a></code> | <code>string</code> | PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>double</code> | The number of seconds between connect retries. MySQL's default is 60 seconds. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath">DumpFilePath</a></code> | <code>string</code> | Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget">FailoverTarget</a></code> | <code>object</code> | Specifies if the replica is the failover target. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>double</code> | Time in ms between replication heartbeats. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password">Password</a></code> | <code>string</code> | Password for the replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher">SslCipher</a></code> | <code>string</code> | Permissible ciphers for use in SSL encryption. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username">Username</a></code> | <code>string</code> | Username for replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>object</code> | True if the master's common name value is checked during the SSL handshake. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#ca_certificate SqlDatabaseInstance#ca_certificate}

---

##### `CascadableReplica`<sup>Optional</sup> <a name="CascadableReplica" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.cascadableReplica"></a>

```csharp
public object CascadableReplica { get; set; }
```

- *Type:* object

Specifies if a SQL Server replica is a cascadable replica.

A cascadable replica is a SQL Server cross region replica that supports replica(s) under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#cascadable_replica SqlDatabaseInstance#cascadable_replica}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#client_certificate SqlDatabaseInstance#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#client_key SqlDatabaseInstance#client_key}

---

##### `ConnectRetryInterval`<sup>Optional</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval"></a>

```csharp
public double ConnectRetryInterval { get; set; }
```

- *Type:* double

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}

---

##### `DumpFilePath`<sup>Optional</sup> <a name="DumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath"></a>

```csharp
public string DumpFilePath { get; set; }
```

- *Type:* string

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#dump_file_path SqlDatabaseInstance#dump_file_path}

---

##### `FailoverTarget`<sup>Optional</sup> <a name="FailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget"></a>

```csharp
public object FailoverTarget { get; set; }
```

- *Type:* object

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#failover_target SqlDatabaseInstance#failover_target}

---

##### `MasterHeartbeatPeriod`<sup>Optional</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod"></a>

```csharp
public double MasterHeartbeatPeriod { get; set; }
```

- *Type:* double

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#password SqlDatabaseInstance#password}

---

##### `SslCipher`<sup>Optional</sup> <a name="SslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher"></a>

```csharp
public string SslCipher { get; set; }
```

- *Type:* string

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#ssl_cipher SqlDatabaseInstance#ssl_cipher}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#username SqlDatabaseInstance#username}

---

##### `VerifyServerCertificate`<sup>Optional</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate"></a>

```csharp
public object VerifyServerCertificate { get; set; }
```

- *Type:* object

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}

---

### SqlDatabaseInstanceReplicationCluster <a name="SqlDatabaseInstanceReplicationCluster" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceReplicationCluster {
    string FailoverDrReplicaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster.property.failoverDrReplicaName">FailoverDrReplicaName</a></code> | <code>string</code> | If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica. |

---

##### `FailoverDrReplicaName`<sup>Optional</sup> <a name="FailoverDrReplicaName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster.property.failoverDrReplicaName"></a>

```csharp
public string FailoverDrReplicaName { get; set; }
```

- *Type:* string

If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica.

The standard format of this field is "your-project:your-instance". You can also set this field to "your-instance", but cloud SQL backend will convert it to the aforementioned standard format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#failover_dr_replica_name SqlDatabaseInstance#failover_dr_replica_name}

---

### SqlDatabaseInstanceRestoreBackupContext <a name="SqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceRestoreBackupContext {
    double BackupRunId,
    string InstanceId = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId">BackupRunId</a></code> | <code>double</code> | The ID of the backup run to restore from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId">InstanceId</a></code> | <code>string</code> | The ID of the instance that the backup was taken from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project">Project</a></code> | <code>string</code> | The full project ID of the source instance. |

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId"></a>

```csharp
public double BackupRunId { get; set; }
```

- *Type:* double

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#backup_run_id SqlDatabaseInstance#backup_run_id}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#instance_id SqlDatabaseInstance#instance_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

### SqlDatabaseInstanceServerCaCert <a name="SqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceServerCaCert {

};
```


### SqlDatabaseInstanceSettings <a name="SqlDatabaseInstanceSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettings {
    string Tier,
    string ActivationPolicy = null,
    SqlDatabaseInstanceSettingsActiveDirectoryConfig ActiveDirectoryConfig = null,
    SqlDatabaseInstanceSettingsAdvancedMachineFeatures AdvancedMachineFeatures = null,
    string AvailabilityType = null,
    SqlDatabaseInstanceSettingsBackupConfiguration BackupConfiguration = null,
    string Collation = null,
    object ConnectionPoolConfig = null,
    string ConnectorEnforcement = null,
    object DatabaseFlags = null,
    SqlDatabaseInstanceSettingsDataCacheConfig DataCacheConfig = null,
    object DeletionProtectionEnabled = null,
    SqlDatabaseInstanceSettingsDenyMaintenancePeriod DenyMaintenancePeriod = null,
    object DiskAutoresize = null,
    double DiskAutoresizeLimit = null,
    double DiskSize = null,
    string DiskType = null,
    string Edition = null,
    object EnableDataplexIntegration = null,
    object EnableGoogleMlIntegration = null,
    SqlDatabaseInstanceSettingsInsightsConfig InsightsConfig = null,
    SqlDatabaseInstanceSettingsIpConfiguration IpConfiguration = null,
    SqlDatabaseInstanceSettingsLocationPreference LocationPreference = null,
    SqlDatabaseInstanceSettingsMaintenanceWindow MaintenanceWindow = null,
    SqlDatabaseInstanceSettingsPasswordValidationPolicy PasswordValidationPolicy = null,
    string PricingPlan = null,
    object RetainBackupsOnDelete = null,
    SqlDatabaseInstanceSettingsSqlServerAuditConfig SqlServerAuditConfig = null,
    string TimeZone = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier">Tier</a></code> | <code>string</code> | The machine type to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy">ActivationPolicy</a></code> | <code>string</code> | This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType">AvailabilityType</a></code> | <code>string</code> | The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | backup_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation">Collation</a></code> | <code>string</code> | The name of server instance collation. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectionPoolConfig">ConnectionPoolConfig</a></code> | <code>object</code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>string</code> | Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags">DatabaseFlags</a></code> | <code>object</code> | database_flags block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | data_cache_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>object</code> | Configuration to protect against accidental instance deletion. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize">DiskAutoresize</a></code> | <code>object</code> | Enables auto-resizing of the storage size. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>double</code> | The maximum size, in GB, to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize">DiskSize</a></code> | <code>double</code> | The size of data disk, in GB. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType">DiskType</a></code> | <code>string</code> | The type of supported data disk is tier dependent and can be PD_SSD or PD_HDD or HYPERDISK_BALANCED. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition">Edition</a></code> | <code>string</code> | The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableDataplexIntegration">EnableDataplexIntegration</a></code> | <code>object</code> | Enables Dataplex Integration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableGoogleMlIntegration">EnableGoogleMlIntegration</a></code> | <code>object</code> | Enables Vertex AI Integration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | insights_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | location_preference block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | password_validation_policy block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | Pricing plan for this instance, can only be PER_USE. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.retainBackupsOnDelete">RetainBackupsOnDelete</a></code> | <code>object</code> | When this parameter is set to true, Cloud SQL retains backups of the instance even after the instance is deleted. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | sql_server_audit_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone">TimeZone</a></code> | <code>string</code> | The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value user label pairs to assign to the instance. |

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#tier SqlDatabaseInstance#tier}

---

##### `ActivationPolicy`<sup>Optional</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy"></a>

```csharp
public string ActivationPolicy { get; set; }
```

- *Type:* string

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#activation_policy SqlDatabaseInstance#activation_policy}

---

##### `ActiveDirectoryConfig`<sup>Optional</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsActiveDirectoryConfig ActiveDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#active_directory_config SqlDatabaseInstance#active_directory_config}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures"></a>

```csharp
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#advanced_machine_features SqlDatabaseInstance#advanced_machine_features}

---

##### `AvailabilityType`<sup>Optional</sup> <a name="AvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType"></a>

```csharp
public string AvailabilityType { get; set; }
```

- *Type:* string

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#availability_type SqlDatabaseInstance#availability_type}

---

##### `BackupConfiguration`<sup>Optional</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfiguration BackupConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#backup_configuration SqlDatabaseInstance#backup_configuration}

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation"></a>

```csharp
public string Collation { get; set; }
```

- *Type:* string

The name of server instance collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#collation SqlDatabaseInstance#collation}

---

##### `ConnectionPoolConfig`<sup>Optional</sup> <a name="ConnectionPoolConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectionPoolConfig"></a>

```csharp
public object ConnectionPoolConfig { get; set; }
```

- *Type:* object

connection_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#connection_pool_config SqlDatabaseInstance#connection_pool_config}

---

##### `ConnectorEnforcement`<sup>Optional</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement"></a>

```csharp
public string ConnectorEnforcement { get; set; }
```

- *Type:* string

Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections.

If enabled, all the direct connections are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#connector_enforcement SqlDatabaseInstance#connector_enforcement}

---

##### `DatabaseFlags`<sup>Optional</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags"></a>

```csharp
public object DatabaseFlags { get; set; }
```

- *Type:* object

database_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#database_flags SqlDatabaseInstance#database_flags}

---

##### `DataCacheConfig`<sup>Optional</sup> <a name="DataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsDataCacheConfig DataCacheConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#data_cache_config SqlDatabaseInstance#data_cache_config}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled"></a>

```csharp
public object DeletionProtectionEnabled { get; set; }
```

- *Type:* object

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#deletion_protection_enabled SqlDatabaseInstance#deletion_protection_enabled}

---

##### `DenyMaintenancePeriod`<sup>Optional</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod"></a>

```csharp
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod DenyMaintenancePeriod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#deny_maintenance_period SqlDatabaseInstance#deny_maintenance_period}

---

##### `DiskAutoresize`<sup>Optional</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize"></a>

```csharp
public object DiskAutoresize { get; set; }
```

- *Type:* object

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#disk_autoresize SqlDatabaseInstance#disk_autoresize}

---

##### `DiskAutoresizeLimit`<sup>Optional</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit"></a>

```csharp
public double DiskAutoresizeLimit { get; set; }
```

- *Type:* double

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize"></a>

```csharp
public double DiskSize { get; set; }
```

- *Type:* double

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB for PD_SSD, PD_HDD and 20GB for HYPERDISK_BALANCED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#disk_size SqlDatabaseInstance#disk_size}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of supported data disk is tier dependent and can be PD_SSD or PD_HDD or HYPERDISK_BALANCED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#disk_type SqlDatabaseInstance#disk_type}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#edition SqlDatabaseInstance#edition}

---

##### `EnableDataplexIntegration`<sup>Optional</sup> <a name="EnableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableDataplexIntegration"></a>

```csharp
public object EnableDataplexIntegration { get; set; }
```

- *Type:* object

Enables Dataplex Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#enable_dataplex_integration SqlDatabaseInstance#enable_dataplex_integration}

---

##### `EnableGoogleMlIntegration`<sup>Optional</sup> <a name="EnableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableGoogleMlIntegration"></a>

```csharp
public object EnableGoogleMlIntegration { get; set; }
```

- *Type:* object

Enables Vertex AI Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#enable_google_ml_integration SqlDatabaseInstance#enable_google_ml_integration}

---

##### `InsightsConfig`<sup>Optional</sup> <a name="InsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsInsightsConfig InsightsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#insights_config SqlDatabaseInstance#insights_config}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfiguration IpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#ip_configuration SqlDatabaseInstance#ip_configuration}

---

##### `LocationPreference`<sup>Optional</sup> <a name="LocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference"></a>

```csharp
public SqlDatabaseInstanceSettingsLocationPreference LocationPreference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#location_preference SqlDatabaseInstance#location_preference}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow"></a>

```csharp
public SqlDatabaseInstanceSettingsMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#maintenance_window SqlDatabaseInstance#maintenance_window}

---

##### `PasswordValidationPolicy`<sup>Optional</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy"></a>

```csharp
public SqlDatabaseInstanceSettingsPasswordValidationPolicy PasswordValidationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#password_validation_policy SqlDatabaseInstance#password_validation_policy}

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; set; }
```

- *Type:* string

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#pricing_plan SqlDatabaseInstance#pricing_plan}

---

##### `RetainBackupsOnDelete`<sup>Optional</sup> <a name="RetainBackupsOnDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.retainBackupsOnDelete"></a>

```csharp
public object RetainBackupsOnDelete { get; set; }
```

- *Type:* object

When this parameter is set to true, Cloud SQL retains backups of the instance even after the instance is deleted.

The ON_DEMAND backup will be retained until customer deletes the backup or the project. The AUTOMATED backup will be retained based on the backups retention setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#retain_backups_on_delete SqlDatabaseInstance#retain_backups_on_delete}

---

##### `SqlServerAuditConfig`<sup>Optional</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsSqlServerAuditConfig SqlServerAuditConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#sql_server_audit_config SqlDatabaseInstance#sql_server_audit_config}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#time_zone SqlDatabaseInstance#time_zone}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#user_labels SqlDatabaseInstance#user_labels}

---

### SqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsActiveDirectoryConfig {
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain">Domain</a></code> | <code>string</code> | Domain name of the Active Directory for SQL Server (e.g., mydomain.com). |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#domain SqlDatabaseInstance#domain}

---

### SqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsAdvancedMachineFeatures {
    double ThreadsPerCore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. Can be 1 or 2. |

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core. Can be 1 or 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#threads_per_core SqlDatabaseInstance#threads_per_core}

---

### SqlDatabaseInstanceSettingsBackupConfiguration <a name="SqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsBackupConfiguration {
    SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings BackupRetentionSettings = null,
    object BinaryLogEnabled = null,
    object Enabled = null,
    string Location = null,
    object PointInTimeRecoveryEnabled = null,
    string StartTime = null,
    double TransactionLogRetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | backup_retention_settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>object</code> | True if binary logging is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | True if backup configuration is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location">Location</a></code> | <code>string</code> | Location of the backup configuration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>object</code> | True if Point-in-time recovery is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime">StartTime</a></code> | <code>string</code> | HH:MM format time indicating when backup configuration starts. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>double</code> | The number of days of transaction logs we retain for point in time restore, from 1-7. |

---

##### `BackupRetentionSettings`<sup>Optional</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings BackupRetentionSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}

---

##### `BinaryLogEnabled`<sup>Optional</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled"></a>

```csharp
public object BinaryLogEnabled { get; set; }
```

- *Type:* object

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#enabled SqlDatabaseInstance#enabled}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the backup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#location SqlDatabaseInstance#location}

---

##### `PointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled"></a>

```csharp
public object PointInTimeRecoveryEnabled { get; set; }
```

- *Type:* object

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#start_time SqlDatabaseInstance#start_time}

---

##### `TransactionLogRetentionDays`<sup>Optional</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays"></a>

```csharp
public double TransactionLogRetentionDays { get; set; }
```

- *Type:* double

The number of days of transaction logs we retain for point in time restore, from 1-7.

(For PostgreSQL Enterprise Plus instances, from 1 to 35.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}

---

### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
    double RetainedBackups,
    string RetentionUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups">RetainedBackups</a></code> | <code>double</code> | Number of backups to retain. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | The unit that 'retainedBackups' represents. Defaults to COUNT. |

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups"></a>

```csharp
public double RetainedBackups { get; set; }
```

- *Type:* double

Number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#retained_backups SqlDatabaseInstance#retained_backups}

---

##### `RetentionUnit`<sup>Optional</sup> <a name="RetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#retention_unit SqlDatabaseInstance#retention_unit}

---

### SqlDatabaseInstanceSettingsConnectionPoolConfig <a name="SqlDatabaseInstanceSettingsConnectionPoolConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfig {
    object ConnectionPoolingEnabled = null,
    object Flags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig.property.connectionPoolingEnabled">ConnectionPoolingEnabled</a></code> | <code>object</code> | Whether Managed Connection Pool is enabled for this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig.property.flags">Flags</a></code> | <code>object</code> | flags block. |

---

##### `ConnectionPoolingEnabled`<sup>Optional</sup> <a name="ConnectionPoolingEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig.property.connectionPoolingEnabled"></a>

```csharp
public object ConnectionPoolingEnabled { get; set; }
```

- *Type:* object

Whether Managed Connection Pool is enabled for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#connection_pooling_enabled SqlDatabaseInstance#connection_pooling_enabled}

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfig.property.flags"></a>

```csharp
public object Flags { get; set; }
```

- *Type:* object

flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#flags SqlDatabaseInstance#flags}

---

### SqlDatabaseInstanceSettingsConnectionPoolConfigFlags <a name="SqlDatabaseInstanceSettingsConnectionPoolConfigFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfigFlags {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags.property.name">Name</a></code> | <code>string</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags.property.value">Value</a></code> | <code>string</code> | Value of the flag. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}

---

### SqlDatabaseInstanceSettingsDatabaseFlags <a name="SqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDatabaseFlags {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name">Name</a></code> | <code>string</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value">Value</a></code> | <code>string</code> | Value of the flag. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}

---

### SqlDatabaseInstanceSettingsDataCacheConfig <a name="SqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDataCacheConfig {
    object DataCacheEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled">DataCacheEnabled</a></code> | <code>object</code> | Whether data cache is enabled for the instance. |

---

##### `DataCacheEnabled`<sup>Optional</sup> <a name="DataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled"></a>

```csharp
public object DataCacheEnabled { get; set; }
```

- *Type:* object

Whether data cache is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#data_cache_enabled SqlDatabaseInstance#data_cache_enabled}

---

### SqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDenyMaintenancePeriod {
    string EndDate,
    string StartDate,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate">EndDate</a></code> | <code>string</code> | End date before which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate">StartDate</a></code> | <code>string</code> | Start date after which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time">Time</a></code> | <code>string</code> | Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#end_date SqlDatabaseInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#start_date SqlDatabaseInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#time SqlDatabaseInstance#time}

---

### SqlDatabaseInstanceSettingsInsightsConfig <a name="SqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsInsightsConfig {
    object QueryInsightsEnabled = null,
    double QueryPlansPerMinute = null,
    double QueryStringLength = null,
    object RecordApplicationTags = null,
    object RecordClientAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>object</code> | True if Query Insights feature is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>double</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength">QueryStringLength</a></code> | <code>double</code> | Maximum query length stored in bytes. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>object</code> | True if Query Insights will record application tags from query when enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress">RecordClientAddress</a></code> | <code>object</code> | True if Query Insights will record client address when enabled. |

---

##### `QueryInsightsEnabled`<sup>Optional</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled"></a>

```csharp
public object QueryInsightsEnabled { get; set; }
```

- *Type:* object

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}

---

##### `QueryPlansPerMinute`<sup>Optional</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute"></a>

```csharp
public double QueryPlansPerMinute { get; set; }
```

- *Type:* double

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5. For Enterprise Plus instances, from 0 to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#query_plans_per_minute SqlDatabaseInstance#query_plans_per_minute}

---

##### `QueryStringLength`<sup>Optional</sup> <a name="QueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength"></a>

```csharp
public double QueryStringLength { get; set; }
```

- *Type:* double

Maximum query length stored in bytes.

Between 256 and 4500. Default to 1024. For Enterprise Plus instances, from 1 to 1048576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#query_string_length SqlDatabaseInstance#query_string_length}

---

##### `RecordApplicationTags`<sup>Optional</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags"></a>

```csharp
public object RecordApplicationTags { get; set; }
```

- *Type:* object

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#record_application_tags SqlDatabaseInstance#record_application_tags}

---

##### `RecordClientAddress`<sup>Optional</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress"></a>

```csharp
public object RecordClientAddress { get; set; }
```

- *Type:* object

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#record_client_address SqlDatabaseInstance#record_client_address}

---

### SqlDatabaseInstanceSettingsIpConfiguration <a name="SqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfiguration {
    string AllocatedIpRange = null,
    object AuthorizedNetworks = null,
    string[] CustomSubjectAlternativeNames = null,
    object EnablePrivatePathForGoogleCloudServices = null,
    object Ipv4Enabled = null,
    string PrivateNetwork = null,
    object PscConfig = null,
    string ServerCaMode = null,
    string ServerCaPool = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>object</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.customSubjectAlternativeNames">CustomSubjectAlternativeNames</a></code> | <code>string[]</code> | The custom subject alternative names for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode". |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>object</code> | Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>object</code> | Whether this Cloud SQL instance should be assigned a public IPV4 address. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork">PrivateNetwork</a></code> | <code>string</code> | The VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig">PscConfig</a></code> | <code>object</code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode">ServerCaMode</a></code> | <code>string</code> | Specify how the server certificate's Certificate Authority is hosted. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaPool">ServerCaPool</a></code> | <code>string</code> | The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode". |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode">SslMode</a></code> | <code>string</code> | Specify how SSL connection should be enforced in DB connections. |

---

##### `AllocatedIpRange`<sup>Optional</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; set; }
```

- *Type:* string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `AuthorizedNetworks`<sup>Optional</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks"></a>

```csharp
public object AuthorizedNetworks { get; set; }
```

- *Type:* object

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#authorized_networks SqlDatabaseInstance#authorized_networks}

---

##### `CustomSubjectAlternativeNames`<sup>Optional</sup> <a name="CustomSubjectAlternativeNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.customSubjectAlternativeNames"></a>

```csharp
public string[] CustomSubjectAlternativeNames { get; set; }
```

- *Type:* string[]

The custom subject alternative names for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#custom_subject_alternative_names SqlDatabaseInstance#custom_subject_alternative_names}

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Optional</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices"></a>

```csharp
public object EnablePrivatePathForGoogleCloudServices { get; set; }
```

- *Type:* object

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#enable_private_path_for_google_cloud_services SqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

##### `Ipv4Enabled`<sup>Optional</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled"></a>

```csharp
public object Ipv4Enabled { get; set; }
```

- *Type:* object

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}

---

##### `PrivateNetwork`<sup>Optional</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork"></a>

```csharp
public string PrivateNetwork { get; set; }
```

- *Type:* string

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#private_network SqlDatabaseInstance#private_network}

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig"></a>

```csharp
public object PscConfig { get; set; }
```

- *Type:* object

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#psc_config SqlDatabaseInstance#psc_config}

---

##### `ServerCaMode`<sup>Optional</sup> <a name="ServerCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode"></a>

```csharp
public string ServerCaMode { get; set; }
```

- *Type:* string

Specify how the server certificate's Certificate Authority is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#server_ca_mode SqlDatabaseInstance#server_ca_mode}

---

##### `ServerCaPool`<sup>Optional</sup> <a name="ServerCaPool" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaPool"></a>

```csharp
public string ServerCaPool { get; set; }
```

- *Type:* string

The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#server_ca_pool SqlDatabaseInstance#server_ca_pool}

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Specify how SSL connection should be enforced in DB connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#ssl_mode SqlDatabaseInstance#ssl_mode}

---

### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
    string Value,
    string ExpirationTime = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}.

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}.

---

### SqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfig {
    string[] AllowedConsumerProjects = null,
    object PscAutoConnections = null,
    object PscEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects">AllowedConsumerProjects</a></code> | <code>string[]</code> | List of consumer projects that are allow-listed for PSC connections to this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscAutoConnections">PscAutoConnections</a></code> | <code>object</code> | psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled">PscEnabled</a></code> | <code>object</code> | Whether PSC connectivity is enabled for this instance. |

---

##### `AllowedConsumerProjects`<sup>Optional</sup> <a name="AllowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects"></a>

```csharp
public string[] AllowedConsumerProjects { get; set; }
```

- *Type:* string[]

List of consumer projects that are allow-listed for PSC connections to this instance.

This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#allowed_consumer_projects SqlDatabaseInstance#allowed_consumer_projects}

---

##### `PscAutoConnections`<sup>Optional</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscAutoConnections"></a>

```csharp
public object PscAutoConnections { get; set; }
```

- *Type:* object

psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#psc_auto_connections SqlDatabaseInstance#psc_auto_connections}

---

##### `PscEnabled`<sup>Optional</sup> <a name="PscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled"></a>

```csharp
public object PscEnabled { get; set; }
```

- *Type:* object

Whether PSC connectivity is enabled for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#psc_enabled SqlDatabaseInstance#psc_enabled}

---

### SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections {
    string ConsumerNetwork,
    string ConsumerServiceProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | The consumer network of this consumer endpoint. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerServiceProjectId">ConsumerServiceProjectId</a></code> | <code>string</code> | The project ID of consumer service project of this consumer endpoint. |

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; set; }
```

- *Type:* string

The consumer network of this consumer endpoint.

This must be a resource path that includes both the host project and the network name. The consumer host project of this network might be different from the consumer service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#consumer_network SqlDatabaseInstance#consumer_network}

---

##### `ConsumerServiceProjectId`<sup>Optional</sup> <a name="ConsumerServiceProjectId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerServiceProjectId"></a>

```csharp
public string ConsumerServiceProjectId { get; set; }
```

- *Type:* string

The project ID of consumer service project of this consumer endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#consumer_service_project_id SqlDatabaseInstance#consumer_service_project_id}

---

### SqlDatabaseInstanceSettingsLocationPreference <a name="SqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsLocationPreference {
    string FollowGaeApplication = null,
    string SecondaryZone = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>string</code> | A Google App Engine application whose zone to remain in. Must be in the same region as this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone">SecondaryZone</a></code> | <code>string</code> | The preferred Compute Engine zone for the secondary/failover. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone">Zone</a></code> | <code>string</code> | The preferred compute engine zone. |

---

##### `FollowGaeApplication`<sup>Optional</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication"></a>

```csharp
public string FollowGaeApplication { get; set; }
```

- *Type:* string

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#follow_gae_application SqlDatabaseInstance#follow_gae_application}

---

##### `SecondaryZone`<sup>Optional</sup> <a name="SecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone"></a>

```csharp
public string SecondaryZone { get; set; }
```

- *Type:* string

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#secondary_zone SqlDatabaseInstance#secondary_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#zone SqlDatabaseInstance#zone}

---

### SqlDatabaseInstanceSettingsMaintenanceWindow <a name="SqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsMaintenanceWindow {
    double Day = null,
    double Hour = null,
    string UpdateTrack = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day">Day</a></code> | <code>double</code> | Day of week (1-7), starting on Monday. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour">Hour</a></code> | <code>double</code> | Hour of day (0-23), ignored if day not set. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack">UpdateTrack</a></code> | <code>string</code> | Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#day SqlDatabaseInstance#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#hour SqlDatabaseInstance#hour}

---

##### `UpdateTrack`<sup>Optional</sup> <a name="UpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack"></a>

```csharp
public string UpdateTrack { get; set; }
```

- *Type:* string

Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#update_track SqlDatabaseInstance#update_track}

---

### SqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsPasswordValidationPolicy {
    object EnablePasswordPolicy,
    string Complexity = null,
    object DisallowUsernameSubstring = null,
    double MinLength = null,
    string PasswordChangeInterval = null,
    double ReuseInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>object</code> | Whether the password policy is enabled or not. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity">Complexity</a></code> | <code>string</code> | Password complexity. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>object</code> | Disallow username as a part of the password. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength">MinLength</a></code> | <code>double</code> | Minimum number of characters allowed. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>string</code> | Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval">ReuseInterval</a></code> | <code>double</code> | Number of previous passwords that cannot be reused. |

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy"></a>

```csharp
public object EnablePasswordPolicy { get; set; }
```

- *Type:* object

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#enable_password_policy SqlDatabaseInstance#enable_password_policy}

---

##### `Complexity`<sup>Optional</sup> <a name="Complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity"></a>

```csharp
public string Complexity { get; set; }
```

- *Type:* string

Password complexity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#complexity SqlDatabaseInstance#complexity}

---

##### `DisallowUsernameSubstring`<sup>Optional</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring"></a>

```csharp
public object DisallowUsernameSubstring { get; set; }
```

- *Type:* object

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#disallow_username_substring SqlDatabaseInstance#disallow_username_substring}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#min_length SqlDatabaseInstance#min_length}

---

##### `PasswordChangeInterval`<sup>Optional</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval"></a>

```csharp
public string PasswordChangeInterval { get; set; }
```

- *Type:* string

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#password_change_interval SqlDatabaseInstance#password_change_interval}

---

##### `ReuseInterval`<sup>Optional</sup> <a name="ReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval"></a>

```csharp
public double ReuseInterval { get; set; }
```

- *Type:* double

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#reuse_interval SqlDatabaseInstance#reuse_interval}

---

### SqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsSqlServerAuditConfig {
    string Bucket = null,
    string RetentionInterval = null,
    string UploadInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the destination bucket (e.g., gs://mybucket). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval">RetentionInterval</a></code> | <code>string</code> | How long to keep generated audit files. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval">UploadInterval</a></code> | <code>string</code> | How often to upload generated audit files. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#bucket SqlDatabaseInstance#bucket}

---

##### `RetentionInterval`<sup>Optional</sup> <a name="RetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval"></a>

```csharp
public string RetentionInterval { get; set; }
```

- *Type:* string

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#retention_interval SqlDatabaseInstance#retention_interval}

---

##### `UploadInterval`<sup>Optional</sup> <a name="UploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval"></a>

```csharp
public string UploadInterval { get; set; }
```

- *Type:* string

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#upload_interval SqlDatabaseInstance#upload_interval}

---

### SqlDatabaseInstanceTimeouts <a name="SqlDatabaseInstanceTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseInstanceCloneOutputReference <a name="SqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceCloneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange">ResetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames">ResetDatabaseNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime">ResetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone">ResetPreferredZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocatedIpRange` <a name="ResetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange"></a>

```csharp
private void ResetAllocatedIpRange()
```

##### `ResetDatabaseNames` <a name="ResetDatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames"></a>

```csharp
private void ResetDatabaseNames()
```

##### `ResetPointInTime` <a name="ResetPointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime"></a>

```csharp
private void ResetPointInTime()
```

##### `ResetPreferredZone` <a name="ResetPreferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone"></a>

```csharp
private void ResetPreferredZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput">AllocatedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput">DatabaseNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput">PreferredZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput">SourceInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames">DatabaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime">PointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone">PreferredZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">SourceInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedIpRangeInput`<sup>Optional</sup> <a name="AllocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput"></a>

```csharp
public string AllocatedIpRangeInput { get; }
```

- *Type:* string

---

##### `DatabaseNamesInput`<sup>Optional</sup> <a name="DatabaseNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput"></a>

```csharp
public string[] DatabaseNamesInput { get; }
```

- *Type:* string[]

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput"></a>

```csharp
public string PointInTimeInput { get; }
```

- *Type:* string

---

##### `PreferredZoneInput`<sup>Optional</sup> <a name="PreferredZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput"></a>

```csharp
public string PreferredZoneInput { get; }
```

- *Type:* string

---

##### `SourceInstanceNameInput`<sup>Optional</sup> <a name="SourceInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput"></a>

```csharp
public string SourceInstanceNameInput { get; }
```

- *Type:* string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; }
```

- *Type:* string

---

##### `DatabaseNames`<sup>Required</sup> <a name="DatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```csharp
public string[] DatabaseNames { get; }
```

- *Type:* string[]

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```csharp
public string PointInTime { get; }
```

- *Type:* string

---

##### `PreferredZone`<sup>Required</sup> <a name="PreferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone"></a>

```csharp
public string PreferredZone { get; }
```

- *Type:* string

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```csharp
public string SourceInstanceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceClone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---


### SqlDatabaseInstanceDnsNamesList <a name="SqlDatabaseInstanceDnsNamesList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceDnsNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.get"></a>

```csharp
private SqlDatabaseInstanceDnsNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlDatabaseInstanceDnsNamesOutputReference <a name="SqlDatabaseInstanceDnsNamesOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceDnsNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.dnsScope">DnsScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNames">SqlDatabaseInstanceDnsNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `DnsScope`<sup>Required</sup> <a name="DnsScope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.dnsScope"></a>

```csharp
public string DnsScope { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNamesOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceDnsNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceDnsNames">SqlDatabaseInstanceDnsNames</a>

---


### SqlDatabaseInstanceIpAddressList <a name="SqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceIpAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get"></a>

```csharp
private SqlDatabaseInstanceIpAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlDatabaseInstanceIpAddressOutputReference <a name="SqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">TimeToRetire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `TimeToRetire`<sup>Required</sup> <a name="TimeToRetire" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```csharp
public string TimeToRetire { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a>

---


### SqlDatabaseInstanceReplicaConfigurationOutputReference <a name="SqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceReplicaConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCascadableReplica">ResetCascadableReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval">ResetConnectRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath">ResetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget">ResetFailoverTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod">ResetMasterHeartbeatPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher">ResetSslCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate">ResetVerifyServerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate"></a>

```csharp
private void ResetCaCertificate()
```

##### `ResetCascadableReplica` <a name="ResetCascadableReplica" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCascadableReplica"></a>

```csharp
private void ResetCascadableReplica()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetConnectRetryInterval` <a name="ResetConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval"></a>

```csharp
private void ResetConnectRetryInterval()
```

##### `ResetDumpFilePath` <a name="ResetDumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath"></a>

```csharp
private void ResetDumpFilePath()
```

##### `ResetFailoverTarget` <a name="ResetFailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget"></a>

```csharp
private void ResetFailoverTarget()
```

##### `ResetMasterHeartbeatPeriod` <a name="ResetMasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod"></a>

```csharp
private void ResetMasterHeartbeatPeriod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSslCipher` <a name="ResetSslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher"></a>

```csharp
private void ResetSslCipher()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVerifyServerCertificate` <a name="ResetVerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate"></a>

```csharp
private void ResetVerifyServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplicaInput">CascadableReplicaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput">ConnectRetryIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput">DumpFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput">FailoverTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput">MasterHeartbeatPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput">SslCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput">VerifyServerCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica">CascadableReplica</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">DumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">FailoverTarget</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">SslCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `CascadableReplicaInput`<sup>Optional</sup> <a name="CascadableReplicaInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplicaInput"></a>

```csharp
public object CascadableReplicaInput { get; }
```

- *Type:* object

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `ConnectRetryIntervalInput`<sup>Optional</sup> <a name="ConnectRetryIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput"></a>

```csharp
public double ConnectRetryIntervalInput { get; }
```

- *Type:* double

---

##### `DumpFilePathInput`<sup>Optional</sup> <a name="DumpFilePathInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput"></a>

```csharp
public string DumpFilePathInput { get; }
```

- *Type:* string

---

##### `FailoverTargetInput`<sup>Optional</sup> <a name="FailoverTargetInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput"></a>

```csharp
public object FailoverTargetInput { get; }
```

- *Type:* object

---

##### `MasterHeartbeatPeriodInput`<sup>Optional</sup> <a name="MasterHeartbeatPeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput"></a>

```csharp
public double MasterHeartbeatPeriodInput { get; }
```

- *Type:* double

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SslCipherInput`<sup>Optional</sup> <a name="SslCipherInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput"></a>

```csharp
public string SslCipherInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyServerCertificateInput`<sup>Optional</sup> <a name="VerifyServerCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput"></a>

```csharp
public object VerifyServerCertificateInput { get; }
```

- *Type:* object

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `CascadableReplica`<sup>Required</sup> <a name="CascadableReplica" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica"></a>

```csharp
public object CascadableReplica { get; }
```

- *Type:* object

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `ConnectRetryInterval`<sup>Required</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```csharp
public double ConnectRetryInterval { get; }
```

- *Type:* double

---

##### `DumpFilePath`<sup>Required</sup> <a name="DumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```csharp
public string DumpFilePath { get; }
```

- *Type:* string

---

##### `FailoverTarget`<sup>Required</sup> <a name="FailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```csharp
public object FailoverTarget { get; }
```

- *Type:* object

---

##### `MasterHeartbeatPeriod`<sup>Required</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```csharp
public double MasterHeartbeatPeriod { get; }
```

- *Type:* double

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SslCipher`<sup>Required</sup> <a name="SslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```csharp
public string SslCipher { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyServerCertificate`<sup>Required</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```csharp
public object VerifyServerCertificate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceReplicaConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---


### SqlDatabaseInstanceReplicationClusterOutputReference <a name="SqlDatabaseInstanceReplicationClusterOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceReplicationClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.resetFailoverDrReplicaName">ResetFailoverDrReplicaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailoverDrReplicaName` <a name="ResetFailoverDrReplicaName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.resetFailoverDrReplicaName"></a>

```csharp
private void ResetFailoverDrReplicaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica">DrReplica</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaNameInput">FailoverDrReplicaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName">FailoverDrReplicaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrReplica`<sup>Required</sup> <a name="DrReplica" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica"></a>

```csharp
public IResolvable DrReplica { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FailoverDrReplicaNameInput`<sup>Optional</sup> <a name="FailoverDrReplicaNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaNameInput"></a>

```csharp
public string FailoverDrReplicaNameInput { get; }
```

- *Type:* string

---

##### `FailoverDrReplicaName`<sup>Required</sup> <a name="FailoverDrReplicaName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName"></a>

```csharp
public string FailoverDrReplicaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceReplicationCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicationCluster">SqlDatabaseInstanceReplicationCluster</a>

---


### SqlDatabaseInstanceRestoreBackupContextOutputReference <a name="SqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceRestoreBackupContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput">BackupRunIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">BackupRunId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupRunIdInput`<sup>Optional</sup> <a name="BackupRunIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput"></a>

```csharp
public double BackupRunIdInput { get; }
```

- *Type:* double

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```csharp
public double BackupRunId { get; }
```

- *Type:* double

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceRestoreBackupContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---


### SqlDatabaseInstanceServerCaCertList <a name="SqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceServerCaCertList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get"></a>

```csharp
private SqlDatabaseInstanceServerCaCertOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlDatabaseInstanceServerCaCertOutputReference <a name="SqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceServerCaCertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceServerCaCert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a>

---


### SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsActiveDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit">ResetRetentionUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionUnit` <a name="ResetRetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit"></a>

```csharp
private void ResetRetentionUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput">RetainedBackupsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">RetainedBackups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetainedBackupsInput`<sup>Optional</sup> <a name="RetainedBackupsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput"></a>

```csharp
public double RetainedBackupsInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```csharp
public double RetainedBackups { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsBackupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings">PutBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings">ResetBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled">ResetBinaryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled">ResetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays">ResetTransactionLogRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupRetentionSettings` <a name="PutBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings"></a>

```csharp
private void PutBackupRetentionSettings(SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `ResetBackupRetentionSettings` <a name="ResetBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings"></a>

```csharp
private void ResetBackupRetentionSettings()
```

##### `ResetBinaryLogEnabled` <a name="ResetBinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled"></a>

```csharp
private void ResetBinaryLogEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPointInTimeRecoveryEnabled` <a name="ResetPointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```csharp
private void ResetPointInTimeRecoveryEnabled()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTransactionLogRetentionDays` <a name="ResetTransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays"></a>

```csharp
private void ResetTransactionLogRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput">BackupRetentionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput">BinaryLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput">PointInTimeRecoveryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput">TransactionLogRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupRetentionSettings`<sup>Required</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference BackupRetentionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a>

---

##### `BackupRetentionSettingsInput`<sup>Optional</sup> <a name="BackupRetentionSettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings BackupRetentionSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `BinaryLogEnabledInput`<sup>Optional</sup> <a name="BinaryLogEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput"></a>

```csharp
public object BinaryLogEnabledInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```csharp
public object PointInTimeRecoveryEnabledInput { get; }
```

- *Type:* object

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TransactionLogRetentionDaysInput`<sup>Optional</sup> <a name="TransactionLogRetentionDaysInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput"></a>

```csharp
public double TransactionLogRetentionDaysInput { get; }
```

- *Type:* double

---

##### `BinaryLogEnabled`<sup>Required</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```csharp
public object BinaryLogEnabled { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```csharp
public object PointInTimeRecoveryEnabled { get; }
```

- *Type:* object

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TransactionLogRetentionDays`<sup>Required</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```csharp
public double TransactionLogRetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList <a name="SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference <a name="SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsConnectionPoolConfigList <a name="SqlDatabaseInstanceSettingsConnectionPoolConfigList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference <a name="SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.putFlags">PutFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resetConnectionPoolingEnabled">ResetConnectionPoolingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlags` <a name="PutFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.putFlags"></a>

```csharp
private void PutFlags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.putFlags.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectionPoolingEnabled` <a name="ResetConnectionPoolingEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resetConnectionPoolingEnabled"></a>

```csharp
private void ResetConnectionPoolingEnabled()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resetFlags"></a>

```csharp
private void ResetFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flags">Flags</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList">SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabledInput">ConnectionPoolingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flagsInput">FlagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled">ConnectionPoolingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flags"></a>

```csharp
public SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList Flags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList">SqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList</a>

---

##### `ConnectionPoolingEnabledInput`<sup>Optional</sup> <a name="ConnectionPoolingEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabledInput"></a>

```csharp
public object ConnectionPoolingEnabledInput { get; }
```

- *Type:* object

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flagsInput"></a>

```csharp
public object FlagsInput { get; }
```

- *Type:* object

---

##### `ConnectionPoolingEnabled`<sup>Required</sup> <a name="ConnectionPoolingEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled"></a>

```csharp
public object ConnectionPoolingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsDatabaseFlagsList <a name="SqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDatabaseFlagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="SqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDataCacheConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled">ResetDataCacheEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataCacheEnabled` <a name="ResetDataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled"></a>

```csharp
private void ResetDataCacheEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput">DataCacheEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">DataCacheEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCacheEnabledInput`<sup>Optional</sup> <a name="DataCacheEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput"></a>

```csharp
public object DataCacheEnabledInput { get; }
```

- *Type:* object

---

##### `DataCacheEnabled`<sup>Required</sup> <a name="DataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```csharp
public object DataCacheEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsDataCacheConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### SqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="SqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsInsightsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled">ResetQueryInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute">ResetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength">ResetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags">ResetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress">ResetRecordClientAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryInsightsEnabled` <a name="ResetQueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled"></a>

```csharp
private void ResetQueryInsightsEnabled()
```

##### `ResetQueryPlansPerMinute` <a name="ResetQueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```csharp
private void ResetQueryPlansPerMinute()
```

##### `ResetQueryStringLength` <a name="ResetQueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength"></a>

```csharp
private void ResetQueryStringLength()
```

##### `ResetRecordApplicationTags` <a name="ResetRecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```csharp
private void ResetRecordApplicationTags()
```

##### `ResetRecordClientAddress` <a name="ResetRecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress"></a>

```csharp
private void ResetRecordClientAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput">QueryInsightsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput">QueryPlansPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput">QueryStringLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput">RecordApplicationTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput">RecordClientAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">QueryStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">RecordClientAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInsightsEnabledInput`<sup>Optional</sup> <a name="QueryInsightsEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput"></a>

```csharp
public object QueryInsightsEnabledInput { get; }
```

- *Type:* object

---

##### `QueryPlansPerMinuteInput`<sup>Optional</sup> <a name="QueryPlansPerMinuteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```csharp
public double QueryPlansPerMinuteInput { get; }
```

- *Type:* double

---

##### `QueryStringLengthInput`<sup>Optional</sup> <a name="QueryStringLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```csharp
public double QueryStringLengthInput { get; }
```

- *Type:* double

---

##### `RecordApplicationTagsInput`<sup>Optional</sup> <a name="RecordApplicationTagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```csharp
public object RecordApplicationTagsInput { get; }
```

- *Type:* object

---

##### `RecordClientAddressInput`<sup>Optional</sup> <a name="RecordClientAddressInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```csharp
public object RecordClientAddressInput { get; }
```

- *Type:* object

---

##### `QueryInsightsEnabled`<sup>Required</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```csharp
public object QueryInsightsEnabled { get; }
```

- *Type:* object

---

##### `QueryPlansPerMinute`<sup>Required</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```csharp
public double QueryPlansPerMinute { get; }
```

- *Type:* double

---

##### `QueryStringLength`<sup>Required</sup> <a name="QueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```csharp
public double QueryStringLength { get; }
```

- *Type:* double

---

##### `RecordApplicationTags`<sup>Required</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```csharp
public object RecordApplicationTags { get; }
```

- *Type:* object

---

##### `RecordClientAddress`<sup>Required</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```csharp
public object RecordClientAddress { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsInsightsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput"></a>

```csharp
public string ExpirationTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks">PutAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange">ResetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks">ResetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetCustomSubjectAlternativeNames">ResetCustomSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices">ResetEnablePrivatePathForGoogleCloudServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled">ResetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork">ResetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode">ResetServerCaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaPool">ResetServerCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizedNetworks` <a name="PutAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks"></a>

```csharp
private void PutAuthorizedNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* object

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig"></a>

```csharp
private void PutPscConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAllocatedIpRange` <a name="ResetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange"></a>

```csharp
private void ResetAllocatedIpRange()
```

##### `ResetAuthorizedNetworks` <a name="ResetAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks"></a>

```csharp
private void ResetAuthorizedNetworks()
```

##### `ResetCustomSubjectAlternativeNames` <a name="ResetCustomSubjectAlternativeNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetCustomSubjectAlternativeNames"></a>

```csharp
private void ResetCustomSubjectAlternativeNames()
```

##### `ResetEnablePrivatePathForGoogleCloudServices` <a name="ResetEnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices"></a>

```csharp
private void ResetEnablePrivatePathForGoogleCloudServices()
```

##### `ResetIpv4Enabled` <a name="ResetIpv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled"></a>

```csharp
private void ResetIpv4Enabled()
```

##### `ResetPrivateNetwork` <a name="ResetPrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork"></a>

```csharp
private void ResetPrivateNetwork()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig"></a>

```csharp
private void ResetPscConfig()
```

##### `ResetServerCaMode` <a name="ResetServerCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode"></a>

```csharp
private void ResetServerCaMode()
```

##### `ResetServerCaPool` <a name="ResetServerCaPool" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaPool"></a>

```csharp
private void ResetServerCaPool()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput">AllocatedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput">AuthorizedNetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNamesInput">CustomSubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput">EnablePrivatePathForGoogleCloudServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput">Ipv4EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput">PrivateNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput">PscConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput">ServerCaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPoolInput">ServerCaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames">CustomSubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">PrivateNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode">ServerCaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool">ServerCaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList AuthorizedNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfigurationPscConfigList PscConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `AllocatedIpRangeInput`<sup>Optional</sup> <a name="AllocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput"></a>

```csharp
public string AllocatedIpRangeInput { get; }
```

- *Type:* string

---

##### `AuthorizedNetworksInput`<sup>Optional</sup> <a name="AuthorizedNetworksInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput"></a>

```csharp
public object AuthorizedNetworksInput { get; }
```

- *Type:* object

---

##### `CustomSubjectAlternativeNamesInput`<sup>Optional</sup> <a name="CustomSubjectAlternativeNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNamesInput"></a>

```csharp
public string[] CustomSubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `EnablePrivatePathForGoogleCloudServicesInput`<sup>Optional</sup> <a name="EnablePrivatePathForGoogleCloudServicesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput"></a>

```csharp
public object EnablePrivatePathForGoogleCloudServicesInput { get; }
```

- *Type:* object

---

##### `Ipv4EnabledInput`<sup>Optional</sup> <a name="Ipv4EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput"></a>

```csharp
public object Ipv4EnabledInput { get; }
```

- *Type:* object

---

##### `PrivateNetworkInput`<sup>Optional</sup> <a name="PrivateNetworkInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput"></a>

```csharp
public string PrivateNetworkInput { get; }
```

- *Type:* string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput"></a>

```csharp
public object PscConfigInput { get; }
```

- *Type:* object

---

##### `ServerCaModeInput`<sup>Optional</sup> <a name="ServerCaModeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput"></a>

```csharp
public string ServerCaModeInput { get; }
```

- *Type:* string

---

##### `ServerCaPoolInput`<sup>Optional</sup> <a name="ServerCaPoolInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPoolInput"></a>

```csharp
public string ServerCaPoolInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; }
```

- *Type:* string

---

##### `CustomSubjectAlternativeNames`<sup>Required</sup> <a name="CustomSubjectAlternativeNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames"></a>

```csharp
public string[] CustomSubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```csharp
public object EnablePrivatePathForGoogleCloudServices { get; }
```

- *Type:* object

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```csharp
public object Ipv4Enabled { get; }
```

- *Type:* object

---

##### `PrivateNetwork`<sup>Required</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```csharp
public string PrivateNetwork { get; }
```

- *Type:* string

---

##### `ServerCaMode`<sup>Required</sup> <a name="ServerCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode"></a>

```csharp
public string ServerCaMode { get; }
```

- *Type:* string

---

##### `ServerCaPool`<sup>Required</sup> <a name="ServerCaPool" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool"></a>

```csharp
public string ServerCaPool { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections">PutPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects">ResetAllowedConsumerProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscAutoConnections">ResetPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled">ResetPscEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscAutoConnections` <a name="PutPscAutoConnections" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections"></a>

```csharp
private void PutPscAutoConnections(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedConsumerProjects` <a name="ResetAllowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects"></a>

```csharp
private void ResetAllowedConsumerProjects()
```

##### `ResetPscAutoConnections` <a name="ResetPscAutoConnections" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscAutoConnections"></a>

```csharp
private void ResetPscAutoConnections()
```

##### `ResetPscEnabled` <a name="ResetPscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled"></a>

```csharp
private void ResetPscEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput">AllowedConsumerProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnectionsInput">PscAutoConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput">PscEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">AllowedConsumerProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">PscEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList PscAutoConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a>

---

##### `AllowedConsumerProjectsInput`<sup>Optional</sup> <a name="AllowedConsumerProjectsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```csharp
public string[] AllowedConsumerProjectsInput { get; }
```

- *Type:* string[]

---

##### `PscAutoConnectionsInput`<sup>Optional</sup> <a name="PscAutoConnectionsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnectionsInput"></a>

```csharp
public object PscAutoConnectionsInput { get; }
```

- *Type:* object

---

##### `PscEnabledInput`<sup>Optional</sup> <a name="PscEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput"></a>

```csharp
public object PscEnabledInput { get; }
```

- *Type:* object

---

##### `AllowedConsumerProjects`<sup>Required</sup> <a name="AllowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```csharp
public string[] AllowedConsumerProjects { get; }
```

- *Type:* string[]

---

##### `PscEnabled`<sup>Required</sup> <a name="PscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```csharp
public object PscEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get"></a>

```csharp
private SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resetConsumerServiceProjectId">ResetConsumerServiceProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsumerServiceProjectId` <a name="ResetConsumerServiceProjectId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resetConsumerServiceProjectId"></a>

```csharp
private void ResetConsumerServiceProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput">ConsumerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectIdInput">ConsumerServiceProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId">ConsumerServiceProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerNetworkInput`<sup>Optional</sup> <a name="ConsumerNetworkInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput"></a>

```csharp
public string ConsumerNetworkInput { get; }
```

- *Type:* string

---

##### `ConsumerServiceProjectIdInput`<sup>Optional</sup> <a name="ConsumerServiceProjectIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectIdInput"></a>

```csharp
public string ConsumerServiceProjectIdInput { get; }
```

- *Type:* string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; }
```

- *Type:* string

---

##### `ConsumerServiceProjectId`<sup>Required</sup> <a name="ConsumerServiceProjectId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId"></a>

```csharp
public string ConsumerServiceProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="SqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsLocationPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication">ResetFollowGaeApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone">ResetSecondaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFollowGaeApplication` <a name="ResetFollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication"></a>

```csharp
private void ResetFollowGaeApplication()
```

##### `ResetSecondaryZone` <a name="ResetSecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone"></a>

```csharp
private void ResetSecondaryZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput">FollowGaeApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput">SecondaryZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">SecondaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FollowGaeApplicationInput`<sup>Optional</sup> <a name="FollowGaeApplicationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput"></a>

```csharp
public string FollowGaeApplicationInput { get; }
```

- *Type:* string

---

##### `SecondaryZoneInput`<sup>Optional</sup> <a name="SecondaryZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput"></a>

```csharp
public string SecondaryZoneInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `FollowGaeApplication`<sup>Required</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```csharp
public string FollowGaeApplication { get; }
```

- *Type:* string

---

##### `SecondaryZone`<sup>Required</sup> <a name="SecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```csharp
public string SecondaryZone { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsLocationPreference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---


### SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack">ResetUpdateTrack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetUpdateTrack` <a name="ResetUpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack"></a>

```csharp
private void ResetUpdateTrack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput">UpdateTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">UpdateTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `UpdateTrackInput`<sup>Optional</sup> <a name="UpdateTrackInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput"></a>

```csharp
public string UpdateTrackInput { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `UpdateTrack`<sup>Required</sup> <a name="UpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```csharp
public string UpdateTrack { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### SqlDatabaseInstanceSettingsOutputReference <a name="SqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig">PutActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration">PutBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putConnectionPoolConfig">PutConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags">PutDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig">PutDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod">PutDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig">PutInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference">PutLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy">PutPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig">PutSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy">ResetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig">ResetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType">ResetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration">ResetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectionPoolConfig">ResetConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement">ResetConnectorEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags">ResetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig">ResetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod">ResetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize">ResetDiskAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit">ResetDiskAutoresizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration">ResetEnableDataplexIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration">ResetEnableGoogleMlIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig">ResetInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference">ResetLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy">ResetPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetRetainBackupsOnDelete">ResetRetainBackupsOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig">ResetSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectoryConfig` <a name="PutActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig"></a>

```csharp
private void PutActiveDirectoryConfig(SqlDatabaseInstanceSettingsActiveDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(SqlDatabaseInstanceSettingsAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `PutBackupConfiguration` <a name="PutBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration"></a>

```csharp
private void PutBackupConfiguration(SqlDatabaseInstanceSettingsBackupConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `PutConnectionPoolConfig` <a name="PutConnectionPoolConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putConnectionPoolConfig"></a>

```csharp
private void PutConnectionPoolConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putConnectionPoolConfig.parameter.value"></a>

- *Type:* object

---

##### `PutDatabaseFlags` <a name="PutDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags"></a>

```csharp
private void PutDatabaseFlags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags.parameter.value"></a>

- *Type:* object

---

##### `PutDataCacheConfig` <a name="PutDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig"></a>

```csharp
private void PutDataCacheConfig(SqlDatabaseInstanceSettingsDataCacheConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `PutDenyMaintenancePeriod` <a name="PutDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod"></a>

```csharp
private void PutDenyMaintenancePeriod(SqlDatabaseInstanceSettingsDenyMaintenancePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `PutInsightsConfig` <a name="PutInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig"></a>

```csharp
private void PutInsightsConfig(SqlDatabaseInstanceSettingsInsightsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration"></a>

```csharp
private void PutIpConfiguration(SqlDatabaseInstanceSettingsIpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `PutLocationPreference` <a name="PutLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference"></a>

```csharp
private void PutLocationPreference(SqlDatabaseInstanceSettingsLocationPreference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(SqlDatabaseInstanceSettingsMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `PutPasswordValidationPolicy` <a name="PutPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy"></a>

```csharp
private void PutPasswordValidationPolicy(SqlDatabaseInstanceSettingsPasswordValidationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `PutSqlServerAuditConfig` <a name="PutSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig"></a>

```csharp
private void PutSqlServerAuditConfig(SqlDatabaseInstanceSettingsSqlServerAuditConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `ResetActivationPolicy` <a name="ResetActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy"></a>

```csharp
private void ResetActivationPolicy()
```

##### `ResetActiveDirectoryConfig` <a name="ResetActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig"></a>

```csharp
private void ResetActiveDirectoryConfig()
```

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetAvailabilityType` <a name="ResetAvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType"></a>

```csharp
private void ResetAvailabilityType()
```

##### `ResetBackupConfiguration` <a name="ResetBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration"></a>

```csharp
private void ResetBackupConfiguration()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation"></a>

```csharp
private void ResetCollation()
```

##### `ResetConnectionPoolConfig` <a name="ResetConnectionPoolConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectionPoolConfig"></a>

```csharp
private void ResetConnectionPoolConfig()
```

##### `ResetConnectorEnforcement` <a name="ResetConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement"></a>

```csharp
private void ResetConnectorEnforcement()
```

##### `ResetDatabaseFlags` <a name="ResetDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```csharp
private void ResetDatabaseFlags()
```

##### `ResetDataCacheConfig` <a name="ResetDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig"></a>

```csharp
private void ResetDataCacheConfig()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetDenyMaintenancePeriod` <a name="ResetDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod"></a>

```csharp
private void ResetDenyMaintenancePeriod()
```

##### `ResetDiskAutoresize` <a name="ResetDiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize"></a>

```csharp
private void ResetDiskAutoresize()
```

##### `ResetDiskAutoresizeLimit` <a name="ResetDiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit"></a>

```csharp
private void ResetDiskAutoresizeLimit()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize"></a>

```csharp
private void ResetDiskSize()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetEnableDataplexIntegration` <a name="ResetEnableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration"></a>

```csharp
private void ResetEnableDataplexIntegration()
```

##### `ResetEnableGoogleMlIntegration` <a name="ResetEnableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration"></a>

```csharp
private void ResetEnableGoogleMlIntegration()
```

##### `ResetInsightsConfig` <a name="ResetInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig"></a>

```csharp
private void ResetInsightsConfig()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration"></a>

```csharp
private void ResetIpConfiguration()
```

##### `ResetLocationPreference` <a name="ResetLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference"></a>

```csharp
private void ResetLocationPreference()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetPasswordValidationPolicy` <a name="ResetPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy"></a>

```csharp
private void ResetPasswordValidationPolicy()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan"></a>

```csharp
private void ResetPricingPlan()
```

##### `ResetRetainBackupsOnDelete` <a name="ResetRetainBackupsOnDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetRetainBackupsOnDelete"></a>

```csharp
private void ResetRetainBackupsOnDelete()
```

##### `ResetSqlServerAuditConfig` <a name="ResetSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig"></a>

```csharp
private void ResetSqlServerAuditConfig()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfig">ConnectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList">SqlDatabaseInstanceSettingsConnectionPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput">ActivationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput">ActiveDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput">AvailabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput">BackupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput">CollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfigInput">ConnectionPoolConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput">ConnectorEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput">DatabaseFlagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput">DataCacheConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput">DenyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput">DiskAutoresizeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput">DiskAutoresizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput">DiskSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput">EnableDataplexIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput">EnableGoogleMlIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput">InsightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput">LocationPreferenceInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput">PasswordValidationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput">PricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDeleteInput">RetainBackupsOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput">SqlServerAuditConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">ActivationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType">AvailabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">DiskAutoresize</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize">DiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration">EnableDataplexIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration">EnableGoogleMlIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDelete">RetainBackupsOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference ActiveDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a>

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```csharp
public SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a>

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfigurationOutputReference BackupConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a>

---

##### `ConnectionPoolConfig`<sup>Required</sup> <a name="ConnectionPoolConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsConnectionPoolConfigList ConnectionPoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsConnectionPoolConfigList">SqlDatabaseInstanceSettingsConnectionPoolConfigList</a>

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```csharp
public SqlDatabaseInstanceSettingsDatabaseFlagsList DatabaseFlags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsDataCacheConfigOutputReference DataCacheConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a>

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```csharp
public SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference DenyMaintenancePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a>

---

##### `InsightsConfig`<sup>Required</sup> <a name="InsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsInsightsConfigOutputReference InsightsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a>

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfigurationOutputReference IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a>

---

##### `LocationPreference`<sup>Required</sup> <a name="LocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```csharp
public SqlDatabaseInstanceSettingsLocationPreferenceOutputReference LocationPreference { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```csharp
public SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a>

---

##### `PasswordValidationPolicy`<sup>Required</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```csharp
public SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference PasswordValidationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a>

---

##### `SqlServerAuditConfig`<sup>Required</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```csharp
public SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference SqlServerAuditConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `ActivationPolicyInput`<sup>Optional</sup> <a name="ActivationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput"></a>

```csharp
public string ActivationPolicyInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfigInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput"></a>

```csharp
public SqlDatabaseInstanceSettingsActiveDirectoryConfig ActiveDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput"></a>

```csharp
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `AvailabilityTypeInput`<sup>Optional</sup> <a name="AvailabilityTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput"></a>

```csharp
public string AvailabilityTypeInput { get; }
```

- *Type:* string

---

##### `BackupConfigurationInput`<sup>Optional</sup> <a name="BackupConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput"></a>

```csharp
public SqlDatabaseInstanceSettingsBackupConfiguration BackupConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput"></a>

```csharp
public string CollationInput { get; }
```

- *Type:* string

---

##### `ConnectionPoolConfigInput`<sup>Optional</sup> <a name="ConnectionPoolConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfigInput"></a>

```csharp
public object ConnectionPoolConfigInput { get; }
```

- *Type:* object

---

##### `ConnectorEnforcementInput`<sup>Optional</sup> <a name="ConnectorEnforcementInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput"></a>

```csharp
public string ConnectorEnforcementInput { get; }
```

- *Type:* string

---

##### `DatabaseFlagsInput`<sup>Optional</sup> <a name="DatabaseFlagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```csharp
public object DatabaseFlagsInput { get; }
```

- *Type:* object

---

##### `DataCacheConfigInput`<sup>Optional</sup> <a name="DataCacheConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput"></a>

```csharp
public SqlDatabaseInstanceSettingsDataCacheConfig DataCacheConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput"></a>

```csharp
public object DeletionProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `DenyMaintenancePeriodInput`<sup>Optional</sup> <a name="DenyMaintenancePeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput"></a>

```csharp
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod DenyMaintenancePeriodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `DiskAutoresizeInput`<sup>Optional</sup> <a name="DiskAutoresizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput"></a>

```csharp
public object DiskAutoresizeInput { get; }
```

- *Type:* object

---

##### `DiskAutoresizeLimitInput`<sup>Optional</sup> <a name="DiskAutoresizeLimitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput"></a>

```csharp
public double DiskAutoresizeLimitInput { get; }
```

- *Type:* double

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput"></a>

```csharp
public double DiskSizeInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EnableDataplexIntegrationInput`<sup>Optional</sup> <a name="EnableDataplexIntegrationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput"></a>

```csharp
public object EnableDataplexIntegrationInput { get; }
```

- *Type:* object

---

##### `EnableGoogleMlIntegrationInput`<sup>Optional</sup> <a name="EnableGoogleMlIntegrationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput"></a>

```csharp
public object EnableGoogleMlIntegrationInput { get; }
```

- *Type:* object

---

##### `InsightsConfigInput`<sup>Optional</sup> <a name="InsightsConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput"></a>

```csharp
public SqlDatabaseInstanceSettingsInsightsConfig InsightsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput"></a>

```csharp
public SqlDatabaseInstanceSettingsIpConfiguration IpConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `LocationPreferenceInput`<sup>Optional</sup> <a name="LocationPreferenceInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput"></a>

```csharp
public SqlDatabaseInstanceSettingsLocationPreference LocationPreferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput"></a>

```csharp
public SqlDatabaseInstanceSettingsMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `PasswordValidationPolicyInput`<sup>Optional</sup> <a name="PasswordValidationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput"></a>

```csharp
public SqlDatabaseInstanceSettingsPasswordValidationPolicy PasswordValidationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput"></a>

```csharp
public string PricingPlanInput { get; }
```

- *Type:* string

---

##### `RetainBackupsOnDeleteInput`<sup>Optional</sup> <a name="RetainBackupsOnDeleteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDeleteInput"></a>

```csharp
public object RetainBackupsOnDeleteInput { get; }
```

- *Type:* object

---

##### `SqlServerAuditConfigInput`<sup>Optional</sup> <a name="SqlServerAuditConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput"></a>

```csharp
public SqlDatabaseInstanceSettingsSqlServerAuditConfig SqlServerAuditConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```csharp
public string ActivationPolicy { get; }
```

- *Type:* string

---

##### `AvailabilityType`<sup>Required</sup> <a name="AvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```csharp
public string AvailabilityType { get; }
```

- *Type:* string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `ConnectorEnforcement`<sup>Required</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```csharp
public string ConnectorEnforcement { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```csharp
public object DeletionProtectionEnabled { get; }
```

- *Type:* object

---

##### `DiskAutoresize`<sup>Required</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```csharp
public object DiskAutoresize { get; }
```

- *Type:* object

---

##### `DiskAutoresizeLimit`<sup>Required</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```csharp
public double DiskAutoresizeLimit { get; }
```

- *Type:* double

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```csharp
public double DiskSize { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnableDataplexIntegration`<sup>Required</sup> <a name="EnableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration"></a>

```csharp
public object EnableDataplexIntegration { get; }
```

- *Type:* object

---

##### `EnableGoogleMlIntegration`<sup>Required</sup> <a name="EnableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration"></a>

```csharp
public object EnableGoogleMlIntegration { get; }
```

- *Type:* object

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; }
```

- *Type:* string

---

##### `RetainBackupsOnDelete`<sup>Required</sup> <a name="RetainBackupsOnDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDelete"></a>

```csharp
public object RetainBackupsOnDelete { get; }
```

- *Type:* object

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---


### SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity">ResetComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring">ResetDisallowUsernameSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval">ResetPasswordChangeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval">ResetReuseInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplexity` <a name="ResetComplexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity"></a>

```csharp
private void ResetComplexity()
```

##### `ResetDisallowUsernameSubstring` <a name="ResetDisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring"></a>

```csharp
private void ResetDisallowUsernameSubstring()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetPasswordChangeInterval` <a name="ResetPasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval"></a>

```csharp
private void ResetPasswordChangeInterval()
```

##### `ResetReuseInterval` <a name="ResetReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval"></a>

```csharp
private void ResetReuseInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput">ComplexityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput">DisallowUsernameSubstringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput">EnablePasswordPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput">PasswordChangeIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput">ReuseIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">Complexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">ReuseInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplexityInput`<sup>Optional</sup> <a name="ComplexityInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput"></a>

```csharp
public string ComplexityInput { get; }
```

- *Type:* string

---

##### `DisallowUsernameSubstringInput`<sup>Optional</sup> <a name="DisallowUsernameSubstringInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput"></a>

```csharp
public object DisallowUsernameSubstringInput { get; }
```

- *Type:* object

---

##### `EnablePasswordPolicyInput`<sup>Optional</sup> <a name="EnablePasswordPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput"></a>

```csharp
public object EnablePasswordPolicyInput { get; }
```

- *Type:* object

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `PasswordChangeIntervalInput`<sup>Optional</sup> <a name="PasswordChangeIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput"></a>

```csharp
public string PasswordChangeIntervalInput { get; }
```

- *Type:* string

---

##### `ReuseIntervalInput`<sup>Optional</sup> <a name="ReuseIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput"></a>

```csharp
public double ReuseIntervalInput { get; }
```

- *Type:* double

---

##### `Complexity`<sup>Required</sup> <a name="Complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```csharp
public string Complexity { get; }
```

- *Type:* string

---

##### `DisallowUsernameSubstring`<sup>Required</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```csharp
public object DisallowUsernameSubstring { get; }
```

- *Type:* object

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```csharp
public object EnablePasswordPolicy { get; }
```

- *Type:* object

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `PasswordChangeInterval`<sup>Required</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```csharp
public string PasswordChangeInterval { get; }
```

- *Type:* string

---

##### `ReuseInterval`<sup>Required</sup> <a name="ReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```csharp
public double ReuseInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsPasswordValidationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval">ResetRetentionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval">ResetUploadInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetRetentionInterval` <a name="ResetRetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval"></a>

```csharp
private void ResetRetentionInterval()
```

##### `ResetUploadInterval` <a name="ResetUploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval"></a>

```csharp
private void ResetUploadInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput">RetentionIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput">UploadIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">RetentionInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">UploadInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `RetentionIntervalInput`<sup>Optional</sup> <a name="RetentionIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput"></a>

```csharp
public string RetentionIntervalInput { get; }
```

- *Type:* string

---

##### `UploadIntervalInput`<sup>Optional</sup> <a name="UploadIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput"></a>

```csharp
public string UploadIntervalInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```csharp
public string RetentionInterval { get; }
```

- *Type:* string

---

##### `UploadInterval`<sup>Required</sup> <a name="UploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```csharp
public string UploadInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```csharp
public SqlDatabaseInstanceSettingsSqlServerAuditConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---


### SqlDatabaseInstanceTimeoutsOutputReference <a name="SqlDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlDatabaseInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



