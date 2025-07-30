# `computeImage` Submodule <a name="`computeImage` Submodule" id="@cdktf/provider-google.computeImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeImage <a name="ComputeImage" id="@cdktf/provider-google.computeImage.ComputeImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image google_compute_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImage(scope Construct, id *string, config ComputeImageConfig) ComputeImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig">ComputeImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageConfig">ComputeImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures">PutGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey">PutImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putRawDisk">PutRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState">PutShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey">PutSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetFamily">ResetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures">ResetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey">ResetImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLicenses">ResetLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk">ResetRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState">ResetShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk">ResetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey">ResetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations">ResetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeImage.ComputeImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeImage.ComputeImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeImage.ComputeImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeImage.ComputeImage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeImage.ComputeImage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeImage.ComputeImage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGuestOsFeatures` <a name="PutGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures"></a>

```go
func PutGuestOsFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImageEncryptionKey` <a name="PutImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey"></a>

```go
func PutImageEncryptionKey(value ComputeImageImageEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `PutRawDisk` <a name="PutRawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk"></a>

```go
func PutRawDisk(value ComputeImageRawDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `PutShieldedInstanceInitialState` <a name="PutShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState"></a>

```go
func PutShieldedInstanceInitialState(value ComputeImageShieldedInstanceInitialState)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---

##### `PutSourceDiskEncryptionKey` <a name="PutSourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey"></a>

```go
func PutSourceDiskEncryptionKey(value ComputeImageSourceDiskEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey"></a>

```go
func PutSourceImageEncryptionKey(value ComputeImageSourceImageEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey"></a>

```go
func PutSourceSnapshotEncryptionKey(value ComputeImageSourceSnapshotEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts"></a>

```go
func PutTimeouts(value ComputeImageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeImage.ComputeImage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-google.computeImage.ComputeImage.resetFamily"></a>

```go
func ResetFamily()
```

##### `ResetGuestOsFeatures` <a name="ResetGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures"></a>

```go
func ResetGuestOsFeatures()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeImage.ComputeImage.resetId"></a>

```go
func ResetId()
```

##### `ResetImageEncryptionKey` <a name="ResetImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey"></a>

```go
func ResetImageEncryptionKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeImage.ComputeImage.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLicenses` <a name="ResetLicenses" id="@cdktf/provider-google.computeImage.ComputeImage.resetLicenses"></a>

```go
func ResetLicenses()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeImage.ComputeImage.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRawDisk` <a name="ResetRawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk"></a>

```go
func ResetRawDisk()
```

##### `ResetShieldedInstanceInitialState` <a name="ResetShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState"></a>

```go
func ResetShieldedInstanceInitialState()
```

##### `ResetSourceDisk` <a name="ResetSourceDisk" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk"></a>

```go
func ResetSourceDisk()
```

##### `ResetSourceDiskEncryptionKey` <a name="ResetSourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey"></a>

```go
func ResetSourceDiskEncryptionKey()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage"></a>

```go
func ResetSourceImage()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey"></a>

```go
func ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey"></a>

```go
func ResetSourceSnapshotEncryptionKey()
```

##### `ResetStorageLocations` <a name="ResetStorageLocations" id="@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations"></a>

```go
func ResetStorageLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.ComputeImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.ComputeImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.ComputeImage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.ComputeImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes">ArchiveSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures">GuestOsFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey">ImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk">RawDisk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState">ShieldedInstanceInitialState</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput">GuestOsFeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput">ImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput">LicensesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput">RawDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput">ShieldedInstanceInitialStateInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput">SourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput">SourceDiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput">SourceImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput">StorageLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licenses">Licenses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage">SourceImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations">StorageLocations</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeImage.ComputeImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeImage.ComputeImage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeImage.ComputeImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeImage.ComputeImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeImage.ComputeImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeImage.ComputeImage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchiveSizeBytes`<sup>Required</sup> <a name="ArchiveSizeBytes" id="@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes"></a>

```go
func ArchiveSizeBytes() *f64
```

- *Type:* *f64

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures"></a>

```go
func GuestOsFeatures() ComputeImageGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a>

---

##### `ImageEncryptionKey`<sup>Required</sup> <a name="ImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey"></a>

```go
func ImageEncryptionKey() ComputeImageImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `RawDisk`<sup>Required</sup> <a name="RawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk"></a>

```go
func RawDisk() ComputeImageRawDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeImage.ComputeImage.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ShieldedInstanceInitialState`<sup>Required</sup> <a name="ShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState"></a>

```go
func ShieldedInstanceInitialState() ComputeImageShieldedInstanceInitialStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a>

---

##### `SourceDiskEncryptionKey`<sup>Required</sup> <a name="SourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey"></a>

```go
func SourceDiskEncryptionKey() ComputeImageSourceDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a>

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey"></a>

```go
func SourceImageEncryptionKey() ComputeImageSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey"></a>

```go
func SourceSnapshotEncryptionKey() ComputeImageSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeouts"></a>

```go
func Timeouts() ComputeImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `GuestOsFeaturesInput`<sup>Optional</sup> <a name="GuestOsFeaturesInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput"></a>

```go
func GuestOsFeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageEncryptionKeyInput`<sup>Optional</sup> <a name="ImageEncryptionKeyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput"></a>

```go
func ImageEncryptionKeyInput() ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LicensesInput`<sup>Optional</sup> <a name="LicensesInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput"></a>

```go
func LicensesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RawDiskInput`<sup>Optional</sup> <a name="RawDiskInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput"></a>

```go
func RawDiskInput() ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `ShieldedInstanceInitialStateInput`<sup>Optional</sup> <a name="ShieldedInstanceInitialStateInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput"></a>

```go
func ShieldedInstanceInitialStateInput() ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---

##### `SourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="SourceDiskEncryptionKeyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput"></a>

```go
func SourceDiskEncryptionKeyInput() ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput"></a>

```go
func SourceDiskInput() *string
```

- *Type:* *string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput"></a>

```go
func SourceImageEncryptionKeyInput() ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput"></a>

```go
func SourceImageInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput"></a>

```go
func SourceSnapshotEncryptionKeyInput() ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `StorageLocationsInput`<sup>Optional</sup> <a name="StorageLocationsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput"></a>

```go
func StorageLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeImage.ComputeImage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google.computeImage.ComputeImage.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeImage.ComputeImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeImage.ComputeImage.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google.computeImage.ComputeImage.property.licenses"></a>

```go
func Licenses() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeImage.ComputeImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeImage.ComputeImage.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk"></a>

```go
func SourceDisk() *string
```

- *Type:* *string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage"></a>

```go
func SourceImage() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations"></a>

```go
func StorageLocations() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeImageConfig <a name="ComputeImageConfig" id="@cdktf/provider-google.computeImage.ComputeImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	DiskSizeGb: *f64,
	Family: *string,
	GuestOsFeatures: interface{},
	Id: *string,
	ImageEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageImageEncryptionKey,
	Labels: *map[string]*string,
	Licenses: *[]*string,
	Project: *string,
	RawDisk: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageRawDisk,
	ShieldedInstanceInitialState: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageShieldedInstanceInitialState,
	SourceDisk: *string,
	SourceDiskEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageSourceDiskEncryptionKey,
	SourceImage: *string,
	SourceImageEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageSourceImageEncryptionKey,
	SourceSnapshot: *string,
	SourceSnapshotEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageSourceSnapshotEncryptionKey,
	StorageLocations: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.family">Family</a></code> | <code>*string</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>interface{}</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey">ImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this Image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses">Licenses</a></code> | <code>*[]*string</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk">RawDisk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState">ShieldedInstanceInitialState</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | The source disk to create this image based on. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage">SourceImage</a></code> | <code>*string</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations">StorageLocations</a></code> | <code>*[]*string</code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.family"></a>

```go
Family *string
```

- *Type:* *string

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `GuestOsFeatures`<sup>Optional</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures"></a>

```go
GuestOsFeatures interface{}
```

- *Type:* interface{}

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageEncryptionKey`<sup>Optional</sup> <a name="ImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey"></a>

```go
ImageEncryptionKey ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `Licenses`<sup>Optional</sup> <a name="Licenses" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses"></a>

```go
Licenses *[]*string
```

- *Type:* *[]*string

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `RawDisk`<sup>Optional</sup> <a name="RawDisk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk"></a>

```go
RawDisk ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `ShieldedInstanceInitialState`<sup>Optional</sup> <a name="ShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState"></a>

```go
ShieldedInstanceInitialState ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}

---

##### `SourceDisk`<sup>Optional</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk"></a>

```go
SourceDisk *string
```

- *Type:* *string

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `SourceDiskEncryptionKey`<sup>Optional</sup> <a name="SourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey"></a>

```go
SourceDiskEncryptionKey ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage"></a>

```go
SourceImage *string
```

- *Type:* *string

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey"></a>

```go
SourceImageEncryptionKey ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey"></a>

```go
SourceSnapshotEncryptionKey ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}

---

##### `StorageLocations`<sup>Optional</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations"></a>

```go
StorageLocations *[]*string
```

- *Type:* *[]*string

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts"></a>

```go
Timeouts ComputeImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

### ComputeImageGuestOsFeatures <a name="ComputeImageGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageGuestOsFeatures {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type">Type</a></code> | <code>*string</code> | The type of supported feature. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "IDPF", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE", "SEV_LIVE_MIGRATABLE_V2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#type ComputeImage#type}

---

### ComputeImageImageEncryptionKey <a name="ComputeImageImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageImageEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
	RsaEncryptedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey"></a>

```go
RsaEncryptedKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageRawDisk <a name="ComputeImageRawDisk" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageRawDisk {
	Source: *string,
	ContainerType: *string,
	Sha1: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source">Source</a></code> | <code>*string</code> | The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType">ContainerType</a></code> | <code>*string</code> | The format used to encode and transmit the block device, which should be TAR. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1">Sha1</a></code> | <code>*string</code> | An optional SHA1 checksum of the disk image before unpackaging. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#source ComputeImage#source}

---

##### `ContainerType`<sup>Optional</sup> <a name="ContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType"></a>

```go
ContainerType *string
```

- *Type:* *string

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#container_type ComputeImage#container_type}

---

##### `Sha1`<sup>Optional</sup> <a name="Sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1"></a>

```go
Sha1 *string
```

- *Type:* *string

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#sha1 ComputeImage#sha1}

---

### ComputeImageShieldedInstanceInitialState <a name="ComputeImageShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageShieldedInstanceInitialState {
	Dbs: interface{},
	Dbxs: interface{},
	Keks: interface{},
	Pk: github.com/cdktf/cdktf-provider-google-go/google/v16.computeImage.ComputeImageShieldedInstanceInitialStatePk,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs">Dbs</a></code> | <code>interface{}</code> | dbs block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs">Dbxs</a></code> | <code>interface{}</code> | dbxs block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks">Keks</a></code> | <code>interface{}</code> | keks block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk">Pk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | pk block. |

---

##### `Dbs`<sup>Optional</sup> <a name="Dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs"></a>

```go
Dbs interface{}
```

- *Type:* interface{}

dbs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#dbs ComputeImage#dbs}

---

##### `Dbxs`<sup>Optional</sup> <a name="Dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs"></a>

```go
Dbxs interface{}
```

- *Type:* interface{}

dbxs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#dbxs ComputeImage#dbxs}

---

##### `Keks`<sup>Optional</sup> <a name="Keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks"></a>

```go
Keks interface{}
```

- *Type:* interface{}

keks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#keks ComputeImage#keks}

---

##### `Pk`<sup>Optional</sup> <a name="Pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk"></a>

```go
Pk ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#pk ComputeImage#pk}

---

### ComputeImageShieldedInstanceInitialStateDbs <a name="ComputeImageShieldedInstanceInitialStateDbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageShieldedInstanceInitialStateDbs {
	Content: *string,
	FileType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content">Content</a></code> | <code>*string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType">FileType</a></code> | <code>*string</code> | The file type of source file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content"></a>

```go
Content *string
```

- *Type:* *string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType"></a>

```go
FileType *string
```

- *Type:* *string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateDbxs <a name="ComputeImageShieldedInstanceInitialStateDbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageShieldedInstanceInitialStateDbxs {
	Content: *string,
	FileType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content">Content</a></code> | <code>*string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType">FileType</a></code> | <code>*string</code> | The file type of source file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content"></a>

```go
Content *string
```

- *Type:* *string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType"></a>

```go
FileType *string
```

- *Type:* *string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateKeks <a name="ComputeImageShieldedInstanceInitialStateKeks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageShieldedInstanceInitialStateKeks {
	Content: *string,
	FileType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content">Content</a></code> | <code>*string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType">FileType</a></code> | <code>*string</code> | The file type of source file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content"></a>

```go
Content *string
```

- *Type:* *string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType"></a>

```go
FileType *string
```

- *Type:* *string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStatePk <a name="ComputeImageShieldedInstanceInitialStatePk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageShieldedInstanceInitialStatePk {
	Content: *string,
	FileType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content">Content</a></code> | <code>*string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType">FileType</a></code> | <code>*string</code> | The file type of source file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content"></a>

```go
Content *string
```

- *Type:* *string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType"></a>

```go
FileType *string
```

- *Type:* *string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageSourceDiskEncryptionKey <a name="ComputeImageSourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageSourceDiskEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
	RsaEncryptedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```go
RsaEncryptedKey *string
```

- *Type:* *string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceImageEncryptionKey <a name="ComputeImageSourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageSourceImageEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
	RsaEncryptedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```go
RsaEncryptedKey *string
```

- *Type:* *string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceSnapshotEncryptionKey <a name="ComputeImageSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageSourceSnapshotEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
	RawKey: *string,
	RsaEncryptedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>*string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey"></a>

```go
RawKey *string
```

- *Type:* *string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```go
RsaEncryptedKey *string
```

- *Type:* *string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageTimeouts <a name="ComputeImageTimeouts" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

&computeimage.ComputeImageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#create ComputeImage#create}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#delete ComputeImage#delete}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#update ComputeImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#create ComputeImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#delete ComputeImage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_image#update ComputeImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeImageGuestOsFeaturesList <a name="ComputeImageGuestOsFeaturesList" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageGuestOsFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeImageGuestOsFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get"></a>

```go
func Get(index *f64) ComputeImageGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageGuestOsFeaturesOutputReference <a name="ComputeImageGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageGuestOsFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeImageGuestOsFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageImageEncryptionKeyOutputReference <a name="ComputeImageImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```go
func ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```go
func RsaEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```go
func RsaEncryptedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---


### ComputeImageRawDiskOutputReference <a name="ComputeImageRawDiskOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageRawDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageRawDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType">ResetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1">ResetSha1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerType` <a name="ResetContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType"></a>

```go
func ResetContainerType()
```

##### `ResetSha1` <a name="ResetSha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1"></a>

```go
func ResetSha1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput">ContainerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input">Sha1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1">Sha1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput"></a>

```go
func ContainerTypeInput() *string
```

- *Type:* *string

---

##### `Sha1Input`<sup>Optional</sup> <a name="Sha1Input" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input"></a>

```go
func Sha1Input() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `Sha1`<sup>Required</sup> <a name="Sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1"></a>

```go
func Sha1() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---


### ComputeImageShieldedInstanceInitialStateDbsList <a name="ComputeImageShieldedInstanceInitialStateDbsList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateDbsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeImageShieldedInstanceInitialStateDbsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get"></a>

```go
func Get(index *f64) ComputeImageShieldedInstanceInitialStateDbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateDbsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateDbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeImageShieldedInstanceInitialStateDbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileType` <a name="ResetFileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType"></a>

```go
func ResetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput"></a>

```go
func FileTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateDbxsList <a name="ComputeImageShieldedInstanceInitialStateDbxsList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateDbxsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeImageShieldedInstanceInitialStateDbxsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get"></a>

```go
func Get(index *f64) ComputeImageShieldedInstanceInitialStateDbxsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateDbxsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbxsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateDbxsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeImageShieldedInstanceInitialStateDbxsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileType` <a name="ResetFileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType"></a>

```go
func ResetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput"></a>

```go
func FileTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateKeksList <a name="ComputeImageShieldedInstanceInitialStateKeksList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateKeksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeImageShieldedInstanceInitialStateKeksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get"></a>

```go
func Get(index *f64) ComputeImageShieldedInstanceInitialStateKeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateKeksOutputReference <a name="ComputeImageShieldedInstanceInitialStateKeksOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateKeksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeImageShieldedInstanceInitialStateKeksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileType` <a name="ResetFileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType"></a>

```go
func ResetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput"></a>

```go
func FileTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeImageShieldedInstanceInitialStateOutputReference <a name="ComputeImageShieldedInstanceInitialStateOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageShieldedInstanceInitialStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs">PutDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs">PutDbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks">PutKeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk">PutPk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs">ResetDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs">ResetDbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks">ResetKeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk">ResetPk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbs` <a name="PutDbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs"></a>

```go
func PutDbs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDbxs` <a name="PutDbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs"></a>

```go
func PutDbxs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKeks` <a name="PutKeks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks"></a>

```go
func PutKeks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPk` <a name="PutPk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk"></a>

```go
func PutPk(value ComputeImageShieldedInstanceInitialStatePk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---

##### `ResetDbs` <a name="ResetDbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs"></a>

```go
func ResetDbs()
```

##### `ResetDbxs` <a name="ResetDbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs"></a>

```go
func ResetDbxs()
```

##### `ResetKeks` <a name="ResetKeks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks"></a>

```go
func ResetKeks()
```

##### `ResetPk` <a name="ResetPk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk"></a>

```go
func ResetPk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs">Dbs</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs">Dbxs</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks">Keks</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk">Pk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput">DbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput">DbxsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput">KeksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput">PkInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dbs`<sup>Required</sup> <a name="Dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs"></a>

```go
func Dbs() ComputeImageShieldedInstanceInitialStateDbsList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a>

---

##### `Dbxs`<sup>Required</sup> <a name="Dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs"></a>

```go
func Dbxs() ComputeImageShieldedInstanceInitialStateDbxsList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a>

---

##### `Keks`<sup>Required</sup> <a name="Keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks"></a>

```go
func Keks() ComputeImageShieldedInstanceInitialStateKeksList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a>

---

##### `Pk`<sup>Required</sup> <a name="Pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk"></a>

```go
func Pk() ComputeImageShieldedInstanceInitialStatePkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a>

---

##### `DbsInput`<sup>Optional</sup> <a name="DbsInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput"></a>

```go
func DbsInput() interface{}
```

- *Type:* interface{}

---

##### `DbxsInput`<sup>Optional</sup> <a name="DbxsInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput"></a>

```go
func DbxsInput() interface{}
```

- *Type:* interface{}

---

##### `KeksInput`<sup>Optional</sup> <a name="KeksInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput"></a>

```go
func KeksInput() interface{}
```

- *Type:* interface{}

---

##### `PkInput`<sup>Optional</sup> <a name="PkInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput"></a>

```go
func PkInput() ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---


### ComputeImageShieldedInstanceInitialStatePkOutputReference <a name="ComputeImageShieldedInstanceInitialStatePkOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageShieldedInstanceInitialStatePkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageShieldedInstanceInitialStatePkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileType` <a name="ResetFileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType"></a>

```go
func ResetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput"></a>

```go
func FileTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---


### ComputeImageSourceDiskEncryptionKeyOutputReference <a name="ComputeImageSourceDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageSourceDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageSourceDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```go
func ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```go
func RsaEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```go
func RsaEncryptedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---


### ComputeImageSourceImageEncryptionKeyOutputReference <a name="ComputeImageSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageSourceImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageSourceImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```go
func ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```go
func RsaEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```go
func RsaEncryptedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---


### ComputeImageSourceSnapshotEncryptionKeyOutputReference <a name="ComputeImageSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageSourceSnapshotEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageSourceSnapshotEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```go
func ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```go
func ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```go
func RawKeyInput() *string
```

- *Type:* *string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```go
func RsaEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```go
func RawKey() *string
```

- *Type:* *string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```go
func RsaEncryptedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---


### ComputeImageTimeoutsOutputReference <a name="ComputeImageTimeoutsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeimage"

computeimage.NewComputeImageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeImageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



