# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-google.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-google.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolume(Construct Scope, string Id, NetappVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig">PutBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy">PutExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters">PutRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy">PutSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy">ResetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters">ResetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions">ResetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings">ResetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory">ResetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions">ResetUnixPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig"></a>

```csharp
private void PutBackupConfig(NetappVolumeBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `PutExportPolicy` <a name="PutExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy"></a>

```csharp
private void PutExportPolicy(NetappVolumeExportPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `PutRestoreParameters` <a name="PutRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters"></a>

```csharp
private void PutRestoreParameters(NetappVolumeRestoreParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `PutSnapshotPolicy` <a name="PutSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy"></a>

```csharp
private void PutSnapshotPolicy(NetappVolumeSnapshotPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig"></a>

```csharp
private void ResetBackupConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExportPolicy` <a name="ResetExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy"></a>

```csharp
private void ResetExportPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```csharp
private void ResetKerberosEnabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappVolume.NetappVolume.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestoreParameters` <a name="ResetRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters"></a>

```csharp
private void ResetRestoreParameters()
```

##### `ResetRestrictedActions` <a name="ResetRestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions"></a>

```csharp
private void ResetRestrictedActions()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle"></a>

```csharp
private void ResetSecurityStyle()
```

##### `ResetSmbSettings` <a name="ResetSmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings"></a>

```csharp
private void ResetSmbSettings()
```

##### `ResetSnapshotDirectory` <a name="ResetSnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory"></a>

```csharp
private void ResetSnapshotDirectory()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy"></a>

```csharp
private void ResetSnapshotPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnixPermissions` <a name="ResetUnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions"></a>

```csharp
private void ResetUnixPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication">HasReplication</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled">LdapEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange">PsaRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib">UsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput">CapacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput">ExportPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput">RestoreParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput">RestrictedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput">SmbSettingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput">SnapshotDirectoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput">UnixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib">CapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions">RestrictedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings">SmbSettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions">UnixPermissions</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappVolume.NetappVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolume.NetappVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolume.NetappVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolume.NetappVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; }
```

- *Type:* string

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig"></a>

```csharp
public NetappVolumeBackupConfigOutputReference BackupConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.netappVolume.NetappVolume.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `ExportPolicy`<sup>Required</sup> <a name="ExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy"></a>

```csharp
public NetappVolumeExportPolicyOutputReference ExportPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a>

---

##### `HasReplication`<sup>Required</sup> <a name="HasReplication" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication"></a>

```csharp
public IResolvable HasReplication { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; }
```

- *Type:* string

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled"></a>

```csharp
public IResolvable LdapEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions"></a>

```csharp
public NetappVolumeMountOptionsList MountOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.netappVolume.NetappVolume.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PsaRange`<sup>Required</sup> <a name="PsaRange" id="@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange"></a>

```csharp
public string PsaRange { get; }
```

- *Type:* string

---

##### `RestoreParameters`<sup>Required</sup> <a name="RestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters"></a>

```csharp
public NetappVolumeRestoreParametersOutputReference RestoreParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a>

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy"></a>

```csharp
public NetappVolumeSnapshotPolicyOutputReference SnapshotPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.netappVolume.NetappVolume.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts"></a>

```csharp
public NetappVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `UsedGib`<sup>Required</sup> <a name="UsedGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib"></a>

```csharp
public string UsedGib { get; }
```

- *Type:* string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput"></a>

```csharp
public NetappVolumeBackupConfig BackupConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput"></a>

```csharp
public string CapacityGibInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExportPolicyInput`<sup>Optional</sup> <a name="ExportPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput"></a>

```csharp
public NetappVolumeExportPolicy ExportPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```csharp
public object KerberosEnabledInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `RestoreParametersInput`<sup>Optional</sup> <a name="RestoreParametersInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput"></a>

```csharp
public NetappVolumeRestoreParameters RestoreParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `RestrictedActionsInput`<sup>Optional</sup> <a name="RestrictedActionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput"></a>

```csharp
public string[] RestrictedActionsInput { get; }
```

- *Type:* string[]

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `SmbSettingsInput`<sup>Optional</sup> <a name="SmbSettingsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput"></a>

```csharp
public string[] SmbSettingsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotDirectoryInput`<sup>Optional</sup> <a name="SnapshotDirectoryInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput"></a>

```csharp
public object SnapshotDirectoryInput { get; }
```

- *Type:* object

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput"></a>

```csharp
public NetappVolumeSnapshotPolicy SnapshotPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnixPermissionsInput`<sup>Optional</sup> <a name="UnixPermissionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput"></a>

```csharp
public string UnixPermissionsInput { get; }
```

- *Type:* string

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib"></a>

```csharp
public string CapacityGib { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappVolume.NetappVolume.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```csharp
public object KerberosEnabled { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolume.NetappVolume.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolume.NetappVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappVolume.NetappVolume.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `RestrictedActions`<sup>Required</sup> <a name="RestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions"></a>

```csharp
public string[] RestrictedActions { get; }
```

- *Type:* string[]

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `SmbSettings`<sup>Required</sup> <a name="SmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings"></a>

```csharp
public string[] SmbSettings { get; }
```

- *Type:* string[]

---

##### `SnapshotDirectory`<sup>Required</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory"></a>

```csharp
public object SnapshotDirectory { get; }
```

- *Type:* object

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `UnixPermissions`<sup>Required</sup> <a name="UnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions"></a>

```csharp
public string UnixPermissions { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBackupConfig <a name="NetappVolumeBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeBackupConfig {
    string[] BackupPolicies = null,
    string BackupVault = null,
    object ScheduledBackupEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies">BackupPolicies</a></code> | <code>string[]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault">BackupVault</a></code> | <code>string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>object</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `BackupPolicies`<sup>Optional</sup> <a name="BackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies"></a>

```csharp
public string[] BackupPolicies { get; set; }
```

- *Type:* string[]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#backup_policies NetappVolume#backup_policies}

---

##### `BackupVault`<sup>Optional</sup> <a name="BackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault"></a>

```csharp
public string BackupVault { get; set; }
```

- *Type:* string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#backup_vault NetappVolume#backup_vault}

---

##### `ScheduledBackupEnabled`<sup>Optional</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```csharp
public object ScheduledBackupEnabled { get; set; }
```

- *Type:* object

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#scheduled_backup_enabled NetappVolume#scheduled_backup_enabled}

---

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CapacityGib,
    string Location,
    string Name,
    string[] Protocols,
    string ShareName,
    string StoragePool,
    NetappVolumeBackupConfig BackupConfig = null,
    string DeletionPolicy = null,
    string Description = null,
    NetappVolumeExportPolicy ExportPolicy = null,
    string Id = null,
    object KerberosEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetappVolumeRestoreParameters RestoreParameters = null,
    string[] RestrictedActions = null,
    string SecurityStyle = null,
    string[] SmbSettings = null,
    object SnapshotDirectory = null,
    NetappVolumeSnapshotPolicy SnapshotPolicy = null,
    NetappVolumeTimeouts Timeouts = null,
    string UnixPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib">CapacityGib</a></code> | <code>string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location">Location</a></code> | <code>string</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name">Name</a></code> | <code>string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName">ShareName</a></code> | <code>string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool">StoragePool</a></code> | <code>string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>object</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions">RestrictedActions</a></code> | <code>string[]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings">SmbSettings</a></code> | <code>string[]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>object</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions">UnixPermissions</a></code> | <code>string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib"></a>

```csharp
public string CapacityGib { get; set; }
```

- *Type:* string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig"></a>

```csharp
public NetappVolumeBackupConfig BackupConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#backup_config NetappVolume#backup_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `ExportPolicy`<sup>Optional</sup> <a name="ExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy"></a>

```csharp
public NetappVolumeExportPolicy ExportPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```csharp
public object KerberosEnabled { get; set; }
```

- *Type:* object

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `RestoreParameters`<sup>Optional</sup> <a name="RestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters"></a>

```csharp
public NetappVolumeRestoreParameters RestoreParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `RestrictedActions`<sup>Optional</sup> <a name="RestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions"></a>

```csharp
public string[] RestrictedActions { get; set; }
```

- *Type:* string[]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `SmbSettings`<sup>Optional</sup> <a name="SmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings"></a>

```csharp
public string[] SmbSettings { get; set; }
```

- *Type:* string[]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `SnapshotDirectory`<sup>Optional</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory"></a>

```csharp
public object SnapshotDirectory { get; set; }
```

- *Type:* object

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy"></a>

```csharp
public NetappVolumeSnapshotPolicy SnapshotPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```csharp
public NetappVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `UnixPermissions`<sup>Optional</sup> <a name="UnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions"></a>

```csharp
public string UnixPermissions { get; set; }
```

- *Type:* string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

### NetappVolumeExportPolicy <a name="NetappVolumeExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeExportPolicy {
    object Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

### NetappVolumeExportPolicyRules <a name="NetappVolumeExportPolicyRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeExportPolicyRules {
    string AccessType = null,
    string AllowedClients = null,
    string HasRootAccess = null,
    object Kerberos5IReadOnly = null,
    object Kerberos5IReadWrite = null,
    object Kerberos5PReadOnly = null,
    object Kerberos5PReadWrite = null,
    object Kerberos5ReadOnly = null,
    object Kerberos5ReadWrite = null,
    object Nfsv3 = null,
    object Nfsv4 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType">AccessType</a></code> | <code>string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients">AllowedClients</a></code> | <code>string</code> | Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess">HasRootAccess</a></code> | <code>string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3">Nfsv3</a></code> | <code>object</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4">Nfsv4</a></code> | <code>object</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#access_type NetappVolume#access_type}

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients"></a>

```csharp
public string AllowedClients { get; set; }
```

- *Type:* string

Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}

---

##### `HasRootAccess`<sup>Optional</sup> <a name="HasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```csharp
public string HasRootAccess { get; set; }
```

- *Type:* string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#has_root_access NetappVolume#has_root_access}

---

##### `Kerberos5IReadOnly`<sup>Optional</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```csharp
public object Kerberos5IReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5i_read_only NetappVolume#kerberos5i_read_only}

---

##### `Kerberos5IReadWrite`<sup>Optional</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```csharp
public object Kerberos5IReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5i_read_write NetappVolume#kerberos5i_read_write}

---

##### `Kerberos5PReadOnly`<sup>Optional</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```csharp
public object Kerberos5PReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5p_read_only NetappVolume#kerberos5p_read_only}

---

##### `Kerberos5PReadWrite`<sup>Optional</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```csharp
public object Kerberos5PReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5p_read_write NetappVolume#kerberos5p_read_write}

---

##### `Kerberos5ReadOnly`<sup>Optional</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```csharp
public object Kerberos5ReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5_read_only NetappVolume#kerberos5_read_only}

---

##### `Kerberos5ReadWrite`<sup>Optional</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```csharp
public object Kerberos5ReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#kerberos5_read_write NetappVolume#kerberos5_read_write}

---

##### `Nfsv3`<sup>Optional</sup> <a name="Nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3"></a>

```csharp
public object Nfsv3 { get; set; }
```

- *Type:* object

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#nfsv3 NetappVolume#nfsv3}

---

##### `Nfsv4`<sup>Optional</sup> <a name="Nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4"></a>

```csharp
public object Nfsv4 { get; set; }
```

- *Type:* object

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#nfsv4 NetappVolume#nfsv4}

---

### NetappVolumeMountOptions <a name="NetappVolumeMountOptions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeMountOptions {

};
```


### NetappVolumeRestoreParameters <a name="NetappVolumeRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeRestoreParameters {
    string SourceBackup = null,
    string SourceSnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; set; }
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

### NetappVolumeSnapshotPolicy <a name="NetappVolumeSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicy {
    NetappVolumeSnapshotPolicyDailySchedule DailySchedule = null,
    object Enabled = null,
    NetappVolumeSnapshotPolicyHourlySchedule HourlySchedule = null,
    NetappVolumeSnapshotPolicyMonthlySchedule MonthlySchedule = null,
    NetappVolumeSnapshotPolicyWeeklySchedule WeeklySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyDailySchedule DailySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyHourlySchedule HourlySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyMonthlySchedule MonthlySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyWeeklySchedule WeeklySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

### NetappVolumeSnapshotPolicyDailySchedule <a name="NetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyDailySchedule {
    double SnapshotsToKeep,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyHourlySchedule <a name="NetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyHourlySchedule {
    double SnapshotsToKeep,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyMonthlySchedule <a name="NetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyMonthlySchedule {
    double SnapshotsToKeep,
    string DaysOfMonth = null,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```csharp
public string DaysOfMonth { get; set; }
```

- *Type:* string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyWeeklySchedule <a name="NetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyWeeklySchedule {
    double SnapshotsToKeep,
    string Day = null,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day">Day</a></code> | <code>string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#day NetappVolume#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBackupConfigOutputReference <a name="NetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies">ResetBackupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault">ResetBackupVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">ResetScheduledBackupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupPolicies` <a name="ResetBackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```csharp
private void ResetBackupPolicies()
```

##### `ResetBackupVault` <a name="ResetBackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```csharp
private void ResetBackupVault()
```

##### `ResetScheduledBackupEnabled` <a name="ResetScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```csharp
private void ResetScheduledBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">BackupPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput">BackupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">ScheduledBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies">BackupPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault">BackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPoliciesInput`<sup>Optional</sup> <a name="BackupPoliciesInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```csharp
public string[] BackupPoliciesInput { get; }
```

- *Type:* string[]

---

##### `BackupVaultInput`<sup>Optional</sup> <a name="BackupVaultInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```csharp
public string BackupVaultInput { get; }
```

- *Type:* string

---

##### `ScheduledBackupEnabledInput`<sup>Optional</sup> <a name="ScheduledBackupEnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```csharp
public object ScheduledBackupEnabledInput { get; }
```

- *Type:* object

---

##### `BackupPolicies`<sup>Required</sup> <a name="BackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```csharp
public string[] BackupPolicies { get; }
```

- *Type:* string[]

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```csharp
public string BackupVault { get; }
```

- *Type:* string

---

##### `ScheduledBackupEnabled`<sup>Required</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```csharp
public object ScheduledBackupEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---


### NetappVolumeExportPolicyOutputReference <a name="NetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeExportPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules"></a>

```csharp
public NetappVolumeExportPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeExportPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---


### NetappVolumeExportPolicyRulesList <a name="NetappVolumeExportPolicyRulesList" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeExportPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get"></a>

```csharp
private NetappVolumeExportPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetappVolumeExportPolicyRulesOutputReference <a name="NetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeExportPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">ResetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">ResetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">ResetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">ResetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">ResetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">ResetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">ResetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3">ResetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4">ResetNfsv4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```csharp
private void ResetAllowedClients()
```

##### `ResetHasRootAccess` <a name="ResetHasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```csharp
private void ResetHasRootAccess()
```

##### `ResetKerberos5IReadOnly` <a name="ResetKerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```csharp
private void ResetKerberos5IReadOnly()
```

##### `ResetKerberos5IReadWrite` <a name="ResetKerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```csharp
private void ResetKerberos5IReadWrite()
```

##### `ResetKerberos5PReadOnly` <a name="ResetKerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```csharp
private void ResetKerberos5PReadOnly()
```

##### `ResetKerberos5PReadWrite` <a name="ResetKerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```csharp
private void ResetKerberos5PReadWrite()
```

##### `ResetKerberos5ReadOnly` <a name="ResetKerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```csharp
private void ResetKerberos5ReadOnly()
```

##### `ResetKerberos5ReadWrite` <a name="ResetKerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```csharp
private void ResetKerberos5ReadWrite()
```

##### `ResetNfsv3` <a name="ResetNfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```csharp
private void ResetNfsv3()
```

##### `ResetNfsv4` <a name="ResetNfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```csharp
private void ResetNfsv4()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">HasRootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">Kerberos5IReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">Kerberos5IReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">Kerberos5PReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">Kerberos5PReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">Kerberos5ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">Kerberos5ReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">Nfsv3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">Nfsv4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">HasRootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3">Nfsv3</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4">Nfsv4</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```csharp
public string AllowedClientsInput { get; }
```

- *Type:* string

---

##### `HasRootAccessInput`<sup>Optional</sup> <a name="HasRootAccessInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```csharp
public string HasRootAccessInput { get; }
```

- *Type:* string

---

##### `Kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```csharp
public object Kerberos5IReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5IReadWriteInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```csharp
public object Kerberos5IReadWriteInput { get; }
```

- *Type:* object

---

##### `Kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```csharp
public object Kerberos5PReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5PReadWriteInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```csharp
public object Kerberos5PReadWriteInput { get; }
```

- *Type:* object

---

##### `Kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```csharp
public object Kerberos5ReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5ReadWriteInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```csharp
public object Kerberos5ReadWriteInput { get; }
```

- *Type:* object

---

##### `Nfsv3Input`<sup>Optional</sup> <a name="Nfsv3Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```csharp
public object Nfsv3Input { get; }
```

- *Type:* object

---

##### `Nfsv4Input`<sup>Optional</sup> <a name="Nfsv4Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```csharp
public object Nfsv4Input { get; }
```

- *Type:* object

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```csharp
public string AllowedClients { get; }
```

- *Type:* string

---

##### `HasRootAccess`<sup>Required</sup> <a name="HasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```csharp
public string HasRootAccess { get; }
```

- *Type:* string

---

##### `Kerberos5IReadOnly`<sup>Required</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```csharp
public object Kerberos5IReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5IReadWrite`<sup>Required</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```csharp
public object Kerberos5IReadWrite { get; }
```

- *Type:* object

---

##### `Kerberos5PReadOnly`<sup>Required</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```csharp
public object Kerberos5PReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5PReadWrite`<sup>Required</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```csharp
public object Kerberos5PReadWrite { get; }
```

- *Type:* object

---

##### `Kerberos5ReadOnly`<sup>Required</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```csharp
public object Kerberos5ReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5ReadWrite`<sup>Required</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```csharp
public object Kerberos5ReadWrite { get; }
```

- *Type:* object

---

##### `Nfsv3`<sup>Required</sup> <a name="Nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```csharp
public object Nfsv3 { get; }
```

- *Type:* object

---

##### `Nfsv4`<sup>Required</sup> <a name="Nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```csharp
public object Nfsv4 { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetappVolumeMountOptionsList <a name="NetappVolumeMountOptionsList" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeMountOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get"></a>

```csharp
private NetappVolumeMountOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetappVolumeMountOptionsOutputReference <a name="NetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeMountOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export">Export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull">ExportFull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export"></a>

```csharp
public string Export { get; }
```

- *Type:* string

---

##### `ExportFull`<sup>Required</sup> <a name="ExportFull" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```csharp
public string ExportFull { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeMountOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a>

---


### NetappVolumeRestoreParametersOutputReference <a name="NetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeRestoreParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup">ResetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```csharp
private void ResetSourceBackup()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```csharp
public string SourceBackupInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeRestoreParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---


### NetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyDailyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeSnapshotPolicyDailySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---


### NetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyHourlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeSnapshotPolicyHourlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---


### NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```csharp
private void ResetDaysOfMonth()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```csharp
public string DaysOfMonthInput { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public string DaysOfMonth { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeSnapshotPolicyMonthlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### NetappVolumeSnapshotPolicyOutputReference <a name="NetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">PutHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">ResetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```csharp
private void PutDailySchedule(NetappVolumeSnapshotPolicyDailySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```csharp
private void PutHourlySchedule(NetappVolumeSnapshotPolicyHourlySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```csharp
private void PutMonthlySchedule(NetappVolumeSnapshotPolicyMonthlySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```csharp
private void PutWeeklySchedule(NetappVolumeSnapshotPolicyWeeklySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```csharp
private void ResetDailySchedule()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```csharp
private void ResetHourlySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```csharp
private void ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```csharp
private void ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyDailyScheduleOutputReference DailySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyHourlyScheduleOutputReference HourlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference MonthlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```csharp
public NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference WeeklySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```csharp
public NetappVolumeSnapshotPolicyDailySchedule DailyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```csharp
public NetappVolumeSnapshotPolicyHourlySchedule HourlyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```csharp
public NetappVolumeSnapshotPolicyMonthlySchedule MonthlyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```csharp
public NetappVolumeSnapshotPolicyWeeklySchedule WeeklyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeSnapshotPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---


### NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeSnapshotPolicyWeeklySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



