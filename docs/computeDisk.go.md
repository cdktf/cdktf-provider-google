# `computeDisk` Submodule <a name="`computeDisk` Submodule" id="@cdktf/provider-google.computeDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDisk <a name="ComputeDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk google_compute_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDisk(scope Construct, id *string, config ComputeDiskConfig) ComputeDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig">ComputeDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig">ComputeDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk">PutAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures">PutGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetAsyncPrimaryDisk">ResetAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroy">ResetCreateSnapshotBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroyPrefix">ResetCreateSnapshotBeforeDestroyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetGuestOsFeatures">ResetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetLicenses">ResetLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetPhysicalBlockSizeBytes">ResetPhysicalBlockSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceDisk">ResetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceInstantSnapshot">ResetSourceInstantSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceStorageObject">ResetSourceStorageObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeDisk.ComputeDisk.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeDisk.ComputeDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeDisk.ComputeDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeDisk.ComputeDisk.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAsyncPrimaryDisk` <a name="PutAsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk"></a>

```go
func PutAsyncPrimaryDisk(value ComputeDiskAsyncPrimaryDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

---

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey"></a>

```go
func PutDiskEncryptionKey(value ComputeDiskDiskEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

---

##### `PutGuestOsFeatures` <a name="PutGuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures"></a>

```go
func PutGuestOsFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google.computeDisk.ComputeDisk.putParams"></a>

```go
func PutParams(value ComputeDiskParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey"></a>

```go
func PutSourceImageEncryptionKey(value ComputeDiskSourceImageEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey"></a>

```go
func PutSourceSnapshotEncryptionKey(value ComputeDiskSourceSnapshotEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts"></a>

```go
func PutTimeouts(value ComputeDiskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>

---

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetAccessMode"></a>

```go
func ResetAccessMode()
```

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetAsyncPrimaryDisk` <a name="ResetAsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetAsyncPrimaryDisk"></a>

```go
func ResetAsyncPrimaryDisk()
```

##### `ResetCreateSnapshotBeforeDestroy` <a name="ResetCreateSnapshotBeforeDestroy" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroy"></a>

```go
func ResetCreateSnapshotBeforeDestroy()
```

##### `ResetCreateSnapshotBeforeDestroyPrefix` <a name="ResetCreateSnapshotBeforeDestroyPrefix" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroyPrefix"></a>

```go
func ResetCreateSnapshotBeforeDestroyPrefix()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetDiskEncryptionKey"></a>

```go
func ResetDiskEncryptionKey()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetEnableConfidentialCompute"></a>

```go
func ResetEnableConfidentialCompute()
```

##### `ResetGuestOsFeatures` <a name="ResetGuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetGuestOsFeatures"></a>

```go
func ResetGuestOsFeatures()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLicenses` <a name="ResetLicenses" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetLicenses"></a>

```go
func ResetLicenses()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPhysicalBlockSizeBytes` <a name="ResetPhysicalBlockSizeBytes" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetPhysicalBlockSizeBytes"></a>

```go
func ResetPhysicalBlockSizeBytes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedIops"></a>

```go
func ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSize"></a>

```go
func ResetSize()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetSourceDisk` <a name="ResetSourceDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceDisk"></a>

```go
func ResetSourceDisk()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceImageEncryptionKey"></a>

```go
func ResetSourceImageEncryptionKey()
```

##### `ResetSourceInstantSnapshot` <a name="ResetSourceInstantSnapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceInstantSnapshot"></a>

```go
func ResetSourceInstantSnapshot()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceSnapshotEncryptionKey"></a>

```go
func ResetSourceSnapshotEncryptionKey()
```

##### `ResetSourceStorageObject` <a name="ResetSourceStorageObject" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceStorageObject"></a>

```go
func ResetSourceStorageObject()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetStoragePool"></a>

```go
func ResetStoragePool()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetType"></a>

```go
func ResetType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeDisk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.ComputeDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.ComputeDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.ComputeDisk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.ComputeDisk_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDisk">AsyncPrimaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference">ComputeDiskAsyncPrimaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference">ComputeDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskId">DiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeatures">GuestOsFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList">ComputeDiskGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lastAttachTimestamp">LastAttachTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lastDetachTimestamp">LastDetachTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference">ComputeDiskParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskId">SourceDiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference">ComputeDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageId">SourceImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotId">SourceInstantSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference">ComputeDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotId">SourceSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference">ComputeDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDiskInput">AsyncPrimaryDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyInput">CreateSnapshotBeforeDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefixInput">CreateSnapshotBeforeDestroyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeaturesInput">GuestOsFeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.licensesInput">LicensesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytesInput">PhysicalBlockSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshotInput">SnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskInput">SourceDiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotInput">SourceInstantSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObjectInput">SourceStorageObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroy">CreateSnapshotBeforeDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefix">CreateSnapshotBeforeDestroyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.licenses">Licenses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytes">PhysicalBlockSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshot">Snapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshot">SourceInstantSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObject">SourceStorageObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AsyncPrimaryDisk`<sup>Required</sup> <a name="AsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDisk"></a>

```go
func AsyncPrimaryDisk() ComputeDiskAsyncPrimaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference">ComputeDiskAsyncPrimaryDiskOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() ComputeDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference">ComputeDiskDiskEncryptionKeyOutputReference</a>

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskId"></a>

```go
func DiskId() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeatures"></a>

```go
func GuestOsFeatures() ComputeDiskGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList">ComputeDiskGuestOsFeaturesList</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `LastAttachTimestamp`<sup>Required</sup> <a name="LastAttachTimestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lastAttachTimestamp"></a>

```go
func LastAttachTimestamp() *string
```

- *Type:* *string

---

##### `LastDetachTimestamp`<sup>Required</sup> <a name="LastDetachTimestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lastDetachTimestamp"></a>

```go
func LastDetachTimestamp() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.params"></a>

```go
func Params() ComputeDiskParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference">ComputeDiskParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SourceDiskId`<sup>Required</sup> <a name="SourceDiskId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskId"></a>

```go
func SourceDiskId() *string
```

- *Type:* *string

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKey"></a>

```go
func SourceImageEncryptionKey() ComputeDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference">ComputeDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageId"></a>

```go
func SourceImageId() *string
```

- *Type:* *string

---

##### `SourceInstantSnapshotId`<sup>Required</sup> <a name="SourceInstantSnapshotId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotId"></a>

```go
func SourceInstantSnapshotId() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKey"></a>

```go
func SourceSnapshotEncryptionKey() ComputeDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference">ComputeDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotId`<sup>Required</sup> <a name="SourceSnapshotId" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotId"></a>

```go
func SourceSnapshotId() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.timeouts"></a>

```go
func Timeouts() ComputeDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference">ComputeDiskTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `AsyncPrimaryDiskInput`<sup>Optional</sup> <a name="AsyncPrimaryDiskInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDiskInput"></a>

```go
func AsyncPrimaryDiskInput() ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

---

##### `CreateSnapshotBeforeDestroyInput`<sup>Optional</sup> <a name="CreateSnapshotBeforeDestroyInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyInput"></a>

```go
func CreateSnapshotBeforeDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `CreateSnapshotBeforeDestroyPrefixInput`<sup>Optional</sup> <a name="CreateSnapshotBeforeDestroyPrefixInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefixInput"></a>

```go
func CreateSnapshotBeforeDestroyPrefixInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKeyInput"></a>

```go
func DiskEncryptionKeyInput() ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `GuestOsFeaturesInput`<sup>Optional</sup> <a name="GuestOsFeaturesInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeaturesInput"></a>

```go
func GuestOsFeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LicensesInput`<sup>Optional</sup> <a name="LicensesInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.licensesInput"></a>

```go
func LicensesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.paramsInput"></a>

```go
func ParamsInput() ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

---

##### `PhysicalBlockSizeBytesInput`<sup>Optional</sup> <a name="PhysicalBlockSizeBytesInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytesInput"></a>

```go
func PhysicalBlockSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIopsInput"></a>

```go
func ProvisionedIopsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshotInput"></a>

```go
func SnapshotInput() *string
```

- *Type:* *string

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskInput"></a>

```go
func SourceDiskInput() *string
```

- *Type:* *string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKeyInput"></a>

```go
func SourceImageEncryptionKeyInput() ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

---

##### `SourceInstantSnapshotInput`<sup>Optional</sup> <a name="SourceInstantSnapshotInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotInput"></a>

```go
func SourceInstantSnapshotInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```go
func SourceSnapshotEncryptionKeyInput() ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `SourceStorageObjectInput`<sup>Optional</sup> <a name="SourceStorageObjectInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObjectInput"></a>

```go
func SourceStorageObjectInput() *string
```

- *Type:* *string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `CreateSnapshotBeforeDestroy`<sup>Required</sup> <a name="CreateSnapshotBeforeDestroy" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroy"></a>

```go
func CreateSnapshotBeforeDestroy() interface{}
```

- *Type:* interface{}

---

##### `CreateSnapshotBeforeDestroyPrefix`<sup>Required</sup> <a name="CreateSnapshotBeforeDestroyPrefix" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefix"></a>

```go
func CreateSnapshotBeforeDestroyPrefix() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.licenses"></a>

```go
func Licenses() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhysicalBlockSizeBytes`<sup>Required</sup> <a name="PhysicalBlockSizeBytes" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytes"></a>

```go
func PhysicalBlockSizeBytes() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIops"></a>

```go
func ProvisionedIops() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshot"></a>

```go
func Snapshot() *string
```

- *Type:* *string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDisk"></a>

```go
func SourceDisk() *string
```

- *Type:* *string

---

##### `SourceInstantSnapshot`<sup>Required</sup> <a name="SourceInstantSnapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshot"></a>

```go
func SourceInstantSnapshot() *string
```

- *Type:* *string

---

##### `SourceStorageObject`<sup>Required</sup> <a name="SourceStorageObject" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObject"></a>

```go
func SourceStorageObject() *string
```

- *Type:* *string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskAsyncPrimaryDisk <a name="ComputeDiskAsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskAsyncPrimaryDisk {
	Disk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.property.disk">Disk</a></code> | <code>*string</code> | Primary disk for asynchronous disk replication. |

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.property.disk"></a>

```go
Disk *string
```

- *Type:* *string

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#disk ComputeDisk#disk}

---

### ComputeDiskConfig <a name="ComputeDiskConfig" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessMode: *string,
	Architecture: *string,
	AsyncPrimaryDisk: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskAsyncPrimaryDisk,
	CreateSnapshotBeforeDestroy: interface{},
	CreateSnapshotBeforeDestroyPrefix: *string,
	Description: *string,
	DiskEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskDiskEncryptionKey,
	EnableConfidentialCompute: interface{},
	GuestOsFeatures: interface{},
	Id: *string,
	Image: *string,
	Labels: *map[string]*string,
	Licenses: *[]*string,
	Params: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskParams,
	PhysicalBlockSizeBytes: *f64,
	Project: *string,
	ProvisionedIops: *f64,
	ProvisionedThroughput: *f64,
	Size: *f64,
	Snapshot: *string,
	SourceDisk: *string,
	SourceImageEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskSourceImageEncryptionKey,
	SourceInstantSnapshot: *string,
	SourceSnapshotEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskSourceSnapshotEncryptionKey,
	SourceStorageObject: *string,
	StoragePool: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeDisk.ComputeDiskTimeouts,
	Type: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.accessMode">AccessMode</a></code> | <code>*string</code> | The access mode of the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.architecture">Architecture</a></code> | <code>*string</code> | The architecture of the disk. Values include 'X86_64', 'ARM64'. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.asyncPrimaryDisk">AsyncPrimaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroy">CreateSnapshotBeforeDestroy</a></code> | <code>interface{}</code> | If set to true, a snapshot of the disk will be created before it is destroyed. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroyPrefix">CreateSnapshotBeforeDestroyPrefix</a></code> | <code>*string</code> | This will set a custom name prefix for the snapshot that's created when the disk is deleted. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | Whether this disk is using confidential compute mode. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>interface{}</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#id ComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.image">Image</a></code> | <code>*string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.licenses">Licenses</a></code> | <code>*[]*string</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.physicalBlockSizeBytes">PhysicalBlockSizeBytes</a></code> | <code>*f64</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#project ComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | Indicates how much Throughput must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.size">Size</a></code> | <code>*f64</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.snapshot">Snapshot</a></code> | <code>*string</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceInstantSnapshot">SourceInstantSnapshot</a></code> | <code>*string</code> | The source instant snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceStorageObject">SourceStorageObject</a></code> | <code>*string</code> | The full Google Cloud Storage URI where the disk image is stored. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.storagePool">StoragePool</a></code> | <code>*string</code> | The URL or the name of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.type">Type</a></code> | <code>*string</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.zone">Zone</a></code> | <code>*string</code> | A reference to the zone where the disk resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#name ComputeDisk#name}

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

The access mode of the disk.

For example:

* READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode.
* READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode.
* READ_ONLY_SINGLE: The AccessMode means the disk can be attached to multiple instances in RO mode.
  The AccessMode is only valid for Hyperdisk disk types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#access_mode ComputeDisk#access_mode}

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

The architecture of the disk. Values include 'X86_64', 'ARM64'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#architecture ComputeDisk#architecture}

---

##### `AsyncPrimaryDisk`<sup>Optional</sup> <a name="AsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.asyncPrimaryDisk"></a>

```go
AsyncPrimaryDisk ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#async_primary_disk ComputeDisk#async_primary_disk}

---

##### `CreateSnapshotBeforeDestroy`<sup>Optional</sup> <a name="CreateSnapshotBeforeDestroy" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroy"></a>

```go
CreateSnapshotBeforeDestroy interface{}
```

- *Type:* interface{}

If set to true, a snapshot of the disk will be created before it is destroyed.

If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#create_snapshot_before_destroy ComputeDisk#create_snapshot_before_destroy}

---

##### `CreateSnapshotBeforeDestroyPrefix`<sup>Optional</sup> <a name="CreateSnapshotBeforeDestroyPrefix" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroyPrefix"></a>

```go
CreateSnapshotBeforeDestroyPrefix *string
```

- *Type:* *string

This will set a custom name prefix for the snapshot that's created when the disk is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#create_snapshot_before_destroy_prefix ComputeDisk#create_snapshot_before_destroy_prefix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#description ComputeDisk#description}

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.diskEncryptionKey"></a>

```go
DiskEncryptionKey ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#disk_encryption_key ComputeDisk#disk_encryption_key}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

Whether this disk is using confidential compute mode.

Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#enable_confidential_compute ComputeDisk#enable_confidential_compute}

---

##### `GuestOsFeatures`<sup>Optional</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.guestOsFeatures"></a>

```go
GuestOsFeatures interface{}
```

- *Type:* interface{}

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#guest_os_features ComputeDisk#guest_os_features}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#id ComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#image ComputeDisk#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#labels ComputeDisk#labels}

---

##### `Licenses`<sup>Optional</sup> <a name="Licenses" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.licenses"></a>

```go
Licenses *[]*string
```

- *Type:* *[]*string

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#licenses ComputeDisk#licenses}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.params"></a>

```go
Params ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#params ComputeDisk#params}

---

##### `PhysicalBlockSizeBytes`<sup>Optional</sup> <a name="PhysicalBlockSizeBytes" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.physicalBlockSizeBytes"></a>

```go
PhysicalBlockSizeBytes *f64
```

- *Type:* *f64

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#physical_block_size_bytes ComputeDisk#physical_block_size_bytes}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#project ComputeDisk#project}.

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedIops"></a>

```go
ProvisionedIops *f64
```

- *Type:* *f64

Indicates how many IOPS must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#provisioned_iops ComputeDisk#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedThroughput"></a>

```go
ProvisionedThroughput *f64
```

- *Type:* *f64

Indicates how much Throughput must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#provisioned_throughput ComputeDisk#provisioned_throughput}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#size ComputeDisk#size}

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.snapshot"></a>

```go
Snapshot *string
```

- *Type:* *string

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#snapshot ComputeDisk#snapshot}

---

##### `SourceDisk`<sup>Optional</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceDisk"></a>

```go
SourceDisk *string
```

- *Type:* *string

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
* projects/{project}/zones/{zone}/disks/{disk}
* projects/{project}/regions/{region}/disks/{disk}
* zones/{zone}/disks/{disk}
* regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#source_disk ComputeDisk#source_disk}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceImageEncryptionKey"></a>

```go
SourceImageEncryptionKey ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#source_image_encryption_key ComputeDisk#source_image_encryption_key}

---

##### `SourceInstantSnapshot`<sup>Optional</sup> <a name="SourceInstantSnapshot" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceInstantSnapshot"></a>

```go
SourceInstantSnapshot *string
```

- *Type:* *string

The source instant snapshot used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'zones/zone/instantSnapshots/instantSnapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#source_instant_snapshot ComputeDisk#source_instant_snapshot}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```go
SourceSnapshotEncryptionKey ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#source_snapshot_encryption_key ComputeDisk#source_snapshot_encryption_key}

---

##### `SourceStorageObject`<sup>Optional</sup> <a name="SourceStorageObject" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceStorageObject"></a>

```go
SourceStorageObject *string
```

- *Type:* *string

The full Google Cloud Storage URI where the disk image is stored.

This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk.
Valid URIs may start with gs:// or https://storage.googleapis.com/.
This flag is not optimized for creating multiple disks from a source storage object.
To create many disks from a source storage object, use gcloud compute images import instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#source_storage_object ComputeDisk#source_storage_object}

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

The URL or the name of the storage pool in which the new disk is created.

For example:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
* /projects/{project}/zones/{zone}/storagePools/{storagePool}
* /zones/{zone}/storagePools/{storagePool}
* /{storagePool}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#storage_pool ComputeDisk#storage_pool}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.timeouts"></a>

```go
Timeouts ComputeDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#timeouts ComputeDisk#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#type ComputeDisk#type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#zone ComputeDisk#zone}

---

### ComputeDiskDiskEncryptionKey <a name="ComputeDiskDiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskDiskEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
	RsaEncryptedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rsaEncryptedKey"></a>

```go
RsaEncryptedKey *string
```

- *Type:* *string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#rsa_encrypted_key ComputeDisk#rsa_encrypted_key}

---

### ComputeDiskGuestOsFeatures <a name="ComputeDiskGuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskGuestOsFeatures {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.property.type">Type</a></code> | <code>*string</code> | The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#type ComputeDisk#type}

---

### ComputeDiskParams <a name="ComputeDiskParams" id="@cdktf/provider-google.computeDisk.ComputeDiskParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the disk. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeDisk.ComputeDiskParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the disk.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#resource_manager_tags ComputeDisk#resource_manager_tags}

---

### ComputeDiskSourceImageEncryptionKey <a name="ComputeDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskSourceImageEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

### ComputeDiskSourceSnapshotEncryptionKey <a name="ComputeDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskSourceSnapshotEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

### ComputeDiskTimeouts <a name="ComputeDiskTimeouts" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

&computedisk.ComputeDiskTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#create ComputeDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#delete ComputeDisk#delete}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#update ComputeDisk#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#create ComputeDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#delete ComputeDisk#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk#update ComputeDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskAsyncPrimaryDiskOutputReference <a name="ComputeDiskAsyncPrimaryDiskOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskAsyncPrimaryDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskAsyncPrimaryDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput">DiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput"></a>

```go
func DiskInput() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

---


### ComputeDiskDiskEncryptionKeyOutputReference <a name="ComputeDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```go
func ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```go
func RsaEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```go
func RsaEncryptedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

---


### ComputeDiskGuestOsFeaturesList <a name="ComputeDiskGuestOsFeaturesList" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskGuestOsFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeDiskGuestOsFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get"></a>

```go
func Get(index *f64) ComputeDiskGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeDiskGuestOsFeaturesOutputReference <a name="ComputeDiskGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskGuestOsFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeDiskGuestOsFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeDiskParamsOutputReference <a name="ComputeDiskParamsOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

---


### ComputeDiskSourceImageEncryptionKeyOutputReference <a name="ComputeDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskSourceImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskSourceImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

---


### ComputeDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskSourceSnapshotEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

---


### ComputeDiskTimeoutsOutputReference <a name="ComputeDiskTimeoutsOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computedisk"

computedisk.NewComputeDiskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



