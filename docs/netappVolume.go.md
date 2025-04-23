# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-google.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-google.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolume(scope Construct, id *string, config NetappVolumeConfig) NetappVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy">ResetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLargeCapacity">ResetLargeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints">ResetMultipleEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters">ResetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions">ResetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings">ResetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory">ResetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions">ResetUnixPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig"></a>

```go
func PutBackupConfig(value NetappVolumeBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `PutExportPolicy` <a name="PutExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy"></a>

```go
func PutExportPolicy(value NetappVolumeExportPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `PutRestoreParameters` <a name="PutRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters"></a>

```go
func PutRestoreParameters(value NetappVolumeRestoreParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `PutSnapshotPolicy` <a name="PutSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy"></a>

```go
func PutSnapshotPolicy(value NetappVolumeSnapshotPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy"></a>

```go
func PutTieringPolicy(value NetappVolumeTieringPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig"></a>

```go
func ResetBackupConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExportPolicy` <a name="ResetExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy"></a>

```go
func ResetExportPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```go
func ResetKerberosEnabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLargeCapacity` <a name="ResetLargeCapacity" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLargeCapacity"></a>

```go
func ResetLargeCapacity()
```

##### `ResetMultipleEndpoints` <a name="ResetMultipleEndpoints" id="@cdktf/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints"></a>

```go
func ResetMultipleEndpoints()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappVolume.NetappVolume.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRestoreParameters` <a name="ResetRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters"></a>

```go
func ResetRestoreParameters()
```

##### `ResetRestrictedActions` <a name="ResetRestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions"></a>

```go
func ResetRestrictedActions()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetSmbSettings` <a name="ResetSmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings"></a>

```go
func ResetSmbSettings()
```

##### `ResetSnapshotDirectory` <a name="ResetSnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory"></a>

```go
func ResetSnapshotDirectory()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy"></a>

```go
func ResetSnapshotPolicy()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTieringPolicy"></a>

```go
func ResetTieringPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnixPermissions` <a name="ResetUnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions"></a>

```go
func ResetUnixPermissions()
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

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NetappVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NetappVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NetappVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NetappVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory">ActiveDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib">ColdTierSizeGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication">HasReplication</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig">KmsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled">LdapEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange">PsaRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.replicaZone">ReplicaZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib">UsedGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput">CapacityGibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput">ExportPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacityInput">LargeCapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput">MultipleEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput">RestoreParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput">RestrictedActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput">SmbSettingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput">SnapshotDirectoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput">UnixPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacity">LargeCapacity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions">RestrictedActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings">SmbSettings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions">UnixPermissions</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappVolume.NetappVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolume.NetappVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolume.NetappVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolume.NetappVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory"></a>

```go
func ActiveDirectory() *string
```

- *Type:* *string

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig"></a>

```go
func BackupConfig() NetappVolumeBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a>

---

##### `ColdTierSizeGib`<sup>Required</sup> <a name="ColdTierSizeGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib"></a>

```go
func ColdTierSizeGib() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.netappVolume.NetappVolume.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `ExportPolicy`<sup>Required</sup> <a name="ExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy"></a>

```go
func ExportPolicy() NetappVolumeExportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a>

---

##### `HasReplication`<sup>Required</sup> <a name="HasReplication" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication"></a>

```go
func HasReplication() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig"></a>

```go
func KmsConfig() *string
```

- *Type:* *string

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled"></a>

```go
func LdapEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions"></a>

```go
func MountOptions() NetappVolumeMountOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.netappVolume.NetappVolume.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PsaRange`<sup>Required</sup> <a name="PsaRange" id="@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange"></a>

```go
func PsaRange() *string
```

- *Type:* *string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktf/provider-google.netappVolume.NetappVolume.property.replicaZone"></a>

```go
func ReplicaZone() *string
```

- *Type:* *string

---

##### `RestoreParameters`<sup>Required</sup> <a name="RestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters"></a>

```go
func RestoreParameters() NetappVolumeRestoreParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a>

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy"></a>

```go
func SnapshotPolicy() NetappVolumeSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.netappVolume.NetappVolume.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicy"></a>

```go
func TieringPolicy() NetappVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts"></a>

```go
func Timeouts() NetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `UsedGib`<sup>Required</sup> <a name="UsedGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib"></a>

```go
func UsedGib() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.netappVolume.NetappVolume.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput"></a>

```go
func BackupConfigInput() NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput"></a>

```go
func CapacityGibInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExportPolicyInput`<sup>Optional</sup> <a name="ExportPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput"></a>

```go
func ExportPolicyInput() NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```go
func KerberosEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeCapacityInput`<sup>Optional</sup> <a name="LargeCapacityInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacityInput"></a>

```go
func LargeCapacityInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultipleEndpointsInput`<sup>Optional</sup> <a name="MultipleEndpointsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput"></a>

```go
func MultipleEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestoreParametersInput`<sup>Optional</sup> <a name="RestoreParametersInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput"></a>

```go
func RestoreParametersInput() NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `RestrictedActionsInput`<sup>Optional</sup> <a name="RestrictedActionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput"></a>

```go
func RestrictedActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `SmbSettingsInput`<sup>Optional</sup> <a name="SmbSettingsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput"></a>

```go
func SmbSettingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotDirectoryInput`<sup>Optional</sup> <a name="SnapshotDirectoryInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput"></a>

```go
func SnapshotDirectoryInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput"></a>

```go
func SnapshotPolicyInput() NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput"></a>

```go
func TieringPolicyInput() NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnixPermissionsInput`<sup>Optional</sup> <a name="UnixPermissionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput"></a>

```go
func UnixPermissionsInput() *string
```

- *Type:* *string

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappVolume.NetappVolume.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```go
func KerberosEnabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeCapacity`<sup>Required</sup> <a name="LargeCapacity" id="@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacity"></a>

```go
func LargeCapacity() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolume.NetappVolume.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MultipleEndpoints`<sup>Required</sup> <a name="MultipleEndpoints" id="@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpoints"></a>

```go
func MultipleEndpoints() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolume.NetappVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappVolume.NetappVolume.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedActions`<sup>Required</sup> <a name="RestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions"></a>

```go
func RestrictedActions() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `SmbSettings`<sup>Required</sup> <a name="SmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings"></a>

```go
func SmbSettings() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotDirectory`<sup>Required</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory"></a>

```go
func SnapshotDirectory() interface{}
```

- *Type:* interface{}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `UnixPermissions`<sup>Required</sup> <a name="UnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions"></a>

```go
func UnixPermissions() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBackupConfig <a name="NetappVolumeBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeBackupConfig {
	BackupPolicies: *[]*string,
	BackupVault: *string,
	ScheduledBackupEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies">BackupPolicies</a></code> | <code>*[]*string</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault">BackupVault</a></code> | <code>*string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>interface{}</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `BackupPolicies`<sup>Optional</sup> <a name="BackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies"></a>

```go
BackupPolicies *[]*string
```

- *Type:* *[]*string

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#backup_policies NetappVolume#backup_policies}

---

##### `BackupVault`<sup>Optional</sup> <a name="BackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault"></a>

```go
BackupVault *string
```

- *Type:* *string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#backup_vault NetappVolume#backup_vault}

---

##### `ScheduledBackupEnabled`<sup>Optional</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```go
ScheduledBackupEnabled interface{}
```

- *Type:* interface{}

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#scheduled_backup_enabled NetappVolume#scheduled_backup_enabled}

---

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityGib: *string,
	Location: *string,
	Name: *string,
	Protocols: *[]*string,
	ShareName: *string,
	StoragePool: *string,
	BackupConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeBackupConfig,
	DeletionPolicy: *string,
	Description: *string,
	ExportPolicy: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeExportPolicy,
	Id: *string,
	KerberosEnabled: interface{},
	Labels: *map[string]*string,
	LargeCapacity: interface{},
	MultipleEndpoints: interface{},
	Project: *string,
	RestoreParameters: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeRestoreParameters,
	RestrictedActions: *[]*string,
	SecurityStyle: *string,
	SmbSettings: *[]*string,
	SnapshotDirectory: interface{},
	SnapshotPolicy: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeSnapshotPolicy,
	TieringPolicy: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeTieringPolicy,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeTimeouts,
	UnixPermissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location">Location</a></code> | <code>*string</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName">ShareName</a></code> | <code>*string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool">StoragePool</a></code> | <code>*string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity">LargeCapacity</a></code> | <code>interface{}</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions">RestrictedActions</a></code> | <code>*[]*string</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings">SmbSettings</a></code> | <code>*[]*string</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>interface{}</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions">UnixPermissions</a></code> | <code>*string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib"></a>

```go
CapacityGib *string
```

- *Type:* *string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig"></a>

```go
BackupConfig NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#backup_config NetappVolume#backup_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `ExportPolicy`<sup>Optional</sup> <a name="ExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy"></a>

```go
ExportPolicy NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```go
KerberosEnabled interface{}
```

- *Type:* interface{}

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `LargeCapacity`<sup>Optional</sup> <a name="LargeCapacity" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity"></a>

```go
LargeCapacity interface{}
```

- *Type:* interface{}

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#large_capacity NetappVolume#large_capacity}

---

##### `MultipleEndpoints`<sup>Optional</sup> <a name="MultipleEndpoints" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints"></a>

```go
MultipleEndpoints interface{}
```

- *Type:* interface{}

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#multiple_endpoints NetappVolume#multiple_endpoints}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `RestoreParameters`<sup>Optional</sup> <a name="RestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters"></a>

```go
RestoreParameters NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `RestrictedActions`<sup>Optional</sup> <a name="RestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions"></a>

```go
RestrictedActions *[]*string
```

- *Type:* *[]*string

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `SmbSettings`<sup>Optional</sup> <a name="SmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings"></a>

```go
SmbSettings *[]*string
```

- *Type:* *[]*string

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `SnapshotDirectory`<sup>Optional</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory"></a>

```go
SnapshotDirectory interface{}
```

- *Type:* interface{}

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy"></a>

```go
SnapshotPolicy NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy"></a>

```go
TieringPolicy NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `UnixPermissions`<sup>Optional</sup> <a name="UnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions"></a>

```go
UnixPermissions *string
```

- *Type:* *string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

### NetappVolumeExportPolicy <a name="NetappVolumeExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeExportPolicy {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

### NetappVolumeExportPolicyRules <a name="NetappVolumeExportPolicyRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeExportPolicyRules {
	AccessType: *string,
	AllowedClients: *string,
	HasRootAccess: *string,
	Kerberos5IReadOnly: interface{},
	Kerberos5IReadWrite: interface{},
	Kerberos5PReadOnly: interface{},
	Kerberos5PReadWrite: interface{},
	Kerberos5ReadOnly: interface{},
	Kerberos5ReadWrite: interface{},
	Nfsv3: interface{},
	Nfsv4: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType">AccessType</a></code> | <code>*string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess">HasRootAccess</a></code> | <code>*string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3">Nfsv3</a></code> | <code>interface{}</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4">Nfsv4</a></code> | <code>interface{}</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#access_type NetappVolume#access_type}

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients"></a>

```go
AllowedClients *string
```

- *Type:* *string

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}

---

##### `HasRootAccess`<sup>Optional</sup> <a name="HasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```go
HasRootAccess *string
```

- *Type:* *string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#has_root_access NetappVolume#has_root_access}

---

##### `Kerberos5IReadOnly`<sup>Optional</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```go
Kerberos5IReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5i_read_only NetappVolume#kerberos5i_read_only}

---

##### `Kerberos5IReadWrite`<sup>Optional</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```go
Kerberos5IReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5i_read_write NetappVolume#kerberos5i_read_write}

---

##### `Kerberos5PReadOnly`<sup>Optional</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```go
Kerberos5PReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5p_read_only NetappVolume#kerberos5p_read_only}

---

##### `Kerberos5PReadWrite`<sup>Optional</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```go
Kerberos5PReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5p_read_write NetappVolume#kerberos5p_read_write}

---

##### `Kerberos5ReadOnly`<sup>Optional</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```go
Kerberos5ReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5_read_only NetappVolume#kerberos5_read_only}

---

##### `Kerberos5ReadWrite`<sup>Optional</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```go
Kerberos5ReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#kerberos5_read_write NetappVolume#kerberos5_read_write}

---

##### `Nfsv3`<sup>Optional</sup> <a name="Nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3"></a>

```go
Nfsv3 interface{}
```

- *Type:* interface{}

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#nfsv3 NetappVolume#nfsv3}

---

##### `Nfsv4`<sup>Optional</sup> <a name="Nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4"></a>

```go
Nfsv4 interface{}
```

- *Type:* interface{}

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#nfsv4 NetappVolume#nfsv4}

---

### NetappVolumeMountOptions <a name="NetappVolumeMountOptions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeMountOptions {

}
```


### NetappVolumeRestoreParameters <a name="NetappVolumeRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeRestoreParameters {
	SourceBackup: *string,
	SourceSnapshot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup"></a>

```go
SourceBackup *string
```

- *Type:* *string

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

### NetappVolumeSnapshotPolicy <a name="NetappVolumeSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeSnapshotPolicy {
	DailySchedule: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeSnapshotPolicyDailySchedule,
	Enabled: interface{},
	HourlySchedule: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule,
	MonthlySchedule: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule,
	WeeklySchedule: github.com/cdktf/cdktf-provider-google-go/google/v14.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```go
DailySchedule NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```go
HourlySchedule NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```go
MonthlySchedule NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```go
WeeklySchedule NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

### NetappVolumeSnapshotPolicyDailySchedule <a name="NetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeSnapshotPolicyDailySchedule {
	SnapshotsToKeep: *f64,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyHourlySchedule <a name="NetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeSnapshotPolicyHourlySchedule {
	SnapshotsToKeep: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyMonthlySchedule <a name="NetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeSnapshotPolicyMonthlySchedule {
	SnapshotsToKeep: *f64,
	DaysOfMonth: *string,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>*string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```go
DaysOfMonth *string
```

- *Type:* *string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyWeeklySchedule <a name="NetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeSnapshotPolicyWeeklySchedule {
	SnapshotsToKeep: *f64,
	Day: *string,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day">Day</a></code> | <code>*string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```go
Day *string
```

- *Type:* *string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#day NetappVolume#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeTieringPolicy <a name="NetappVolumeTieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeTieringPolicy {
	CoolingThresholdDays: *f64,
	TierAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction">TierAction</a></code> | <code>*string</code> | Optional. |

---

##### `CoolingThresholdDays`<sup>Optional</sup> <a name="CoolingThresholdDays" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```go
CoolingThresholdDays *f64
```

- *Type:* *f64

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#cooling_threshold_days NetappVolume#cooling_threshold_days}

---

##### `TierAction`<sup>Optional</sup> <a name="TierAction" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction"></a>

```go
TierAction *string
```

- *Type:* *string

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#tier_action NetappVolume#tier_action}

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

&netappvolume.NetappVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBackupConfigOutputReference <a name="NetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupPolicies` <a name="ResetBackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```go
func ResetBackupPolicies()
```

##### `ResetBackupVault` <a name="ResetBackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```go
func ResetBackupVault()
```

##### `ResetScheduledBackupEnabled` <a name="ResetScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```go
func ResetScheduledBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">BackupPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput">BackupVaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">ScheduledBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies">BackupPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault">BackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPoliciesInput`<sup>Optional</sup> <a name="BackupPoliciesInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```go
func BackupPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupVaultInput`<sup>Optional</sup> <a name="BackupVaultInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```go
func BackupVaultInput() *string
```

- *Type:* *string

---

##### `ScheduledBackupEnabledInput`<sup>Optional</sup> <a name="ScheduledBackupEnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```go
func ScheduledBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicies`<sup>Required</sup> <a name="BackupPolicies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```go
func BackupPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```go
func BackupVault() *string
```

- *Type:* *string

---

##### `ScheduledBackupEnabled`<sup>Required</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```go
func ScheduledBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---


### NetappVolumeExportPolicyOutputReference <a name="NetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeExportPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeExportPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules"></a>

```go
func Rules() NetappVolumeExportPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---


### NetappVolumeExportPolicyRulesList <a name="NetappVolumeExportPolicyRulesList" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeExportPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetappVolumeExportPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get"></a>

```go
func Get(index *f64) NetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeExportPolicyRulesOutputReference <a name="NetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeExportPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetappVolumeExportPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```go
func ResetAllowedClients()
```

##### `ResetHasRootAccess` <a name="ResetHasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```go
func ResetHasRootAccess()
```

##### `ResetKerberos5IReadOnly` <a name="ResetKerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```go
func ResetKerberos5IReadOnly()
```

##### `ResetKerberos5IReadWrite` <a name="ResetKerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```go
func ResetKerberos5IReadWrite()
```

##### `ResetKerberos5PReadOnly` <a name="ResetKerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```go
func ResetKerberos5PReadOnly()
```

##### `ResetKerberos5PReadWrite` <a name="ResetKerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```go
func ResetKerberos5PReadWrite()
```

##### `ResetKerberos5ReadOnly` <a name="ResetKerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```go
func ResetKerberos5ReadOnly()
```

##### `ResetKerberos5ReadWrite` <a name="ResetKerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```go
func ResetKerberos5ReadWrite()
```

##### `ResetNfsv3` <a name="ResetNfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```go
func ResetNfsv3()
```

##### `ResetNfsv4` <a name="ResetNfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```go
func ResetNfsv4()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">HasRootAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">Kerberos5IReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">Kerberos5IReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">Kerberos5PReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">Kerberos5PReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">Kerberos5ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">Kerberos5ReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">Nfsv3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">Nfsv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">HasRootAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3">Nfsv3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4">Nfsv4</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *string
```

- *Type:* *string

---

##### `HasRootAccessInput`<sup>Optional</sup> <a name="HasRootAccessInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```go
func HasRootAccessInput() *string
```

- *Type:* *string

---

##### `Kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```go
func Kerberos5IReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWriteInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```go
func Kerberos5IReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```go
func Kerberos5PReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWriteInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```go
func Kerberos5PReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```go
func Kerberos5ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWriteInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```go
func Kerberos5ReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Nfsv3Input`<sup>Optional</sup> <a name="Nfsv3Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```go
func Nfsv3Input() interface{}
```

- *Type:* interface{}

---

##### `Nfsv4Input`<sup>Optional</sup> <a name="Nfsv4Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```go
func Nfsv4Input() interface{}
```

- *Type:* interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *string
```

- *Type:* *string

---

##### `HasRootAccess`<sup>Required</sup> <a name="HasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```go
func HasRootAccess() *string
```

- *Type:* *string

---

##### `Kerberos5IReadOnly`<sup>Required</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```go
func Kerberos5IReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWrite`<sup>Required</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```go
func Kerberos5IReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnly`<sup>Required</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```go
func Kerberos5PReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWrite`<sup>Required</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```go
func Kerberos5PReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnly`<sup>Required</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```go
func Kerberos5ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWrite`<sup>Required</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```go
func Kerberos5ReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Nfsv3`<sup>Required</sup> <a name="Nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```go
func Nfsv3() interface{}
```

- *Type:* interface{}

---

##### `Nfsv4`<sup>Required</sup> <a name="Nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```go
func Nfsv4() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeMountOptionsList <a name="NetappVolumeMountOptionsList" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeMountOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetappVolumeMountOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get"></a>

```go
func Get(index *f64) NetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetappVolumeMountOptionsOutputReference <a name="NetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetappVolumeMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export">Export</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull">ExportFull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export"></a>

```go
func Export() *string
```

- *Type:* *string

---

##### `ExportFull`<sup>Required</sup> <a name="ExportFull" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```go
func ExportFull() *string
```

- *Type:* *string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a>

---


### NetappVolumeRestoreParametersOutputReference <a name="NetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeRestoreParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeRestoreParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```go
func ResetSourceBackup()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```go
func SourceBackupInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```go
func SourceBackup() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---


### NetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeSnapshotPolicyDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---


### NetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---


### NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```go
func ResetDaysOfMonth()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```go
func DaysOfMonthInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### NetappVolumeSnapshotPolicyOutputReference <a name="NetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeSnapshotPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value NetappVolumeSnapshotPolicyDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```go
func PutHourlySchedule(value NetappVolumeSnapshotPolicyHourlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```go
func PutMonthlySchedule(value NetappVolumeSnapshotPolicyMonthlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value NetappVolumeSnapshotPolicyWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```go
func ResetHourlySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() NetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```go
func HourlySchedule() NetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```go
func MonthlySchedule() NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```go
func HourlyScheduleInput() NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---


### NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### NetappVolumeTieringPolicyOutputReference <a name="NetappVolumeTieringPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeTieringPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeTieringPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">ResetCoolingThresholdDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction">ResetTierAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingThresholdDays` <a name="ResetCoolingThresholdDays" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```go
func ResetCoolingThresholdDays()
```

##### `ResetTierAction` <a name="ResetTierAction" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```go
func ResetTierAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">CoolingThresholdDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput">TierActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction">TierAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoolingThresholdDaysInput`<sup>Optional</sup> <a name="CoolingThresholdDaysInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```go
func CoolingThresholdDaysInput() *f64
```

- *Type:* *f64

---

##### `TierActionInput`<sup>Optional</sup> <a name="TierActionInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```go
func TierActionInput() *string
```

- *Type:* *string

---

##### `CoolingThresholdDays`<sup>Required</sup> <a name="CoolingThresholdDays" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```go
func CoolingThresholdDays() *f64
```

- *Type:* *f64

---

##### `TierAction`<sup>Required</sup> <a name="TierAction" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```go
func TierAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/netappvolume"

netappvolume.NewNetappVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



