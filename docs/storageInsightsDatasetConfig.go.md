# `storageInsightsDatasetConfig` Submodule <a name="`storageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google.storageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsDatasetConfig <a name="StorageInsightsDatasetConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfig(scope Construct, id *string, config StorageInsightsDatasetConfigConfig) StorageInsightsDatasetConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig">StorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig">StorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">PutExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations">PutExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">PutIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations">PutIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders">PutSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects">PutSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">ResetExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">ResetExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">ResetIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">ResetIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">ResetIncludeNewlyCreatedBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset">ResetLinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber">ResetOrganizationNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope">ResetOrganizationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders">ResetSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects">ResetSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeCloudStorageBuckets` <a name="PutExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```go
func PutExcludeCloudStorageBuckets(value StorageInsightsDatasetConfigExcludeCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `PutExcludeCloudStorageLocations` <a name="PutExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```go
func PutExcludeCloudStorageLocations(value StorageInsightsDatasetConfigExcludeCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity"></a>

```go
func PutIdentity(value StorageInsightsDatasetConfigIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---

##### `PutIncludeCloudStorageBuckets` <a name="PutIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```go
func PutIncludeCloudStorageBuckets(value StorageInsightsDatasetConfigIncludeCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `PutIncludeCloudStorageLocations` <a name="PutIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```go
func PutIncludeCloudStorageLocations(value StorageInsightsDatasetConfigIncludeCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `PutSourceFolders` <a name="PutSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders"></a>

```go
func PutSourceFolders(value StorageInsightsDatasetConfigSourceFolders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---

##### `PutSourceProjects` <a name="PutSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects"></a>

```go
func PutSourceProjects(value StorageInsightsDatasetConfigSourceProjects)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts"></a>

```go
func PutTimeouts(value StorageInsightsDatasetConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludeCloudStorageBuckets` <a name="ResetExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```go
func ResetExcludeCloudStorageBuckets()
```

##### `ResetExcludeCloudStorageLocations` <a name="ResetExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```go
func ResetExcludeCloudStorageLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeCloudStorageBuckets` <a name="ResetIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```go
func ResetIncludeCloudStorageBuckets()
```

##### `ResetIncludeCloudStorageLocations` <a name="ResetIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```go
func ResetIncludeCloudStorageLocations()
```

##### `ResetIncludeNewlyCreatedBuckets` <a name="ResetIncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```go
func ResetIncludeNewlyCreatedBuckets()
```

##### `ResetLinkDataset` <a name="ResetLinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset"></a>

```go
func ResetLinkDataset()
```

##### `ResetOrganizationNumber` <a name="ResetOrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```go
func ResetOrganizationNumber()
```

##### `ResetOrganizationScope` <a name="ResetOrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope"></a>

```go
func ResetOrganizationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSourceFolders` <a name="ResetSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders"></a>

```go
func ResetSourceFolders()
```

##### `ResetSourceProjects` <a name="ResetSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects"></a>

```go
func ResetSourceProjects()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.StorageInsightsDatasetConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.StorageInsightsDatasetConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.StorageInsightsDatasetConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.StorageInsightsDatasetConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageInsightsDatasetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState">DatasetConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput">DatasetConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">ExcludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">ExcludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">IncludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">IncludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">IncludeNewlyCreatedBucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput">LinkDatasetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput">OrganizationNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput">OrganizationScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput">SourceFoldersInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput">SourceProjectsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset">LinkDataset</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope">OrganizationScope</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatasetConfigState`<sup>Required</sup> <a name="DatasetConfigState" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState"></a>

```go
func DatasetConfigState() *string
```

- *Type:* *string

---

##### `ExcludeCloudStorageBuckets`<sup>Required</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```go
func ExcludeCloudStorageBuckets() StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `ExcludeCloudStorageLocations`<sup>Required</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```go
func ExcludeCloudStorageLocations() StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity"></a>

```go
func Identity() StorageInsightsDatasetConfigIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `IncludeCloudStorageBuckets`<sup>Required</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```go
func IncludeCloudStorageBuckets() StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `IncludeCloudStorageLocations`<sup>Required</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```go
func IncludeCloudStorageLocations() StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link"></a>

```go
func Link() StorageInsightsDatasetConfigLinkList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceFolders`<sup>Required</sup> <a name="SourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders"></a>

```go
func SourceFolders() StorageInsightsDatasetConfigSourceFoldersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `SourceProjects`<sup>Required</sup> <a name="SourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects"></a>

```go
func SourceProjects() StorageInsightsDatasetConfigSourceProjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts"></a>

```go
func Timeouts() StorageInsightsDatasetConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DatasetConfigIdInput`<sup>Optional</sup> <a name="DatasetConfigIdInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```go
func DatasetConfigIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```go
func ExcludeCloudStorageBucketsInput() StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `ExcludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageLocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```go
func ExcludeCloudStorageLocationsInput() StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput"></a>

```go
func IdentityInput() StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludeCloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```go
func IncludeCloudStorageBucketsInput() StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `IncludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludeCloudStorageLocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```go
func IncludeCloudStorageLocationsInput() StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `IncludeNewlyCreatedBucketsInput`<sup>Optional</sup> <a name="IncludeNewlyCreatedBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```go
func IncludeNewlyCreatedBucketsInput() interface{}
```

- *Type:* interface{}

---

##### `LinkDatasetInput`<sup>Optional</sup> <a name="LinkDatasetInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```go
func LinkDatasetInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationNumberInput`<sup>Optional</sup> <a name="OrganizationNumberInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```go
func OrganizationNumberInput() *string
```

- *Type:* *string

---

##### `OrganizationScopeInput`<sup>Optional</sup> <a name="OrganizationScopeInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```go
func OrganizationScopeInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```go
func RetentionPeriodDaysInput() *f64
```

- *Type:* *f64

---

##### `SourceFoldersInput`<sup>Optional</sup> <a name="SourceFoldersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```go
func SourceFoldersInput() StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---

##### `SourceProjectsInput`<sup>Optional</sup> <a name="SourceProjectsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```go
func SourceProjectsInput() StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId"></a>

```go
func DatasetConfigId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeNewlyCreatedBuckets`<sup>Required</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```go
func IncludeNewlyCreatedBuckets() interface{}
```

- *Type:* interface{}

---

##### `LinkDataset`<sup>Required</sup> <a name="LinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset"></a>

```go
func LinkDataset() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OrganizationNumber`<sup>Required</sup> <a name="OrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber"></a>

```go
func OrganizationNumber() *string
```

- *Type:* *string

---

##### `OrganizationScope`<sup>Required</sup> <a name="OrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope"></a>

```go
func OrganizationScope() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```go
func RetentionPeriodDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsDatasetConfigConfig <a name="StorageInsightsDatasetConfigConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetConfigId: *string,
	Identity: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity,
	Location: *string,
	RetentionPeriodDays: *f64,
	Description: *string,
	ExcludeCloudStorageBuckets: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets,
	ExcludeCloudStorageLocations: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations,
	Id: *string,
	IncludeCloudStorageBuckets: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets,
	IncludeCloudStorageLocations: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations,
	IncludeNewlyCreatedBuckets: interface{},
	LinkDataset: interface{},
	OrganizationNumber: *string,
	OrganizationScope: interface{},
	Project: *string,
	SourceFolders: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders,
	SourceProjects: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>*string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>interface{}</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset">LinkDataset</a></code> | <code>interface{}</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>*string</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope">OrganizationScope</a></code> | <code>interface{}</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```go
DatasetConfigId *string
```

- *Type:* *string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#dataset_config_id StorageInsightsDatasetConfig#dataset_config_id}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity"></a>

```go
Identity StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#identity StorageInsightsDatasetConfig#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#location StorageInsightsDatasetConfig#location}

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```go
RetentionPeriodDays *f64
```

- *Type:* *f64

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#retention_period_days StorageInsightsDatasetConfig#retention_period_days}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#description StorageInsightsDatasetConfig#description}

---

##### `ExcludeCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```go
ExcludeCloudStorageBuckets StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_buckets StorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `ExcludeCloudStorageLocations`<sup>Optional</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```go
ExcludeCloudStorageLocations StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_locations StorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCloudStorageBuckets`<sup>Optional</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```go
IncludeCloudStorageBuckets StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_buckets StorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `IncludeCloudStorageLocations`<sup>Optional</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```go
IncludeCloudStorageLocations StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_locations StorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `IncludeNewlyCreatedBuckets`<sup>Optional</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```go
IncludeNewlyCreatedBuckets interface{}
```

- *Type:* interface{}

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_newly_created_buckets StorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `LinkDataset`<sup>Optional</sup> <a name="LinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```go
LinkDataset interface{}
```

- *Type:* interface{}

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#link_dataset StorageInsightsDatasetConfig#link_dataset}

---

##### `OrganizationNumber`<sup>Optional</sup> <a name="OrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```go
OrganizationNumber *string
```

- *Type:* *string

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_number StorageInsightsDatasetConfig#organization_number}

---

##### `OrganizationScope`<sup>Optional</sup> <a name="OrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```go
OrganizationScope interface{}
```

- *Type:* interface{}

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_scope StorageInsightsDatasetConfig#organization_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}.

---

##### `SourceFolders`<sup>Optional</sup> <a name="SourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```go
SourceFolders StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_folders StorageInsightsDatasetConfig#source_folders}

---

##### `SourceProjects`<sup>Optional</sup> <a name="SourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```go
SourceProjects StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_projects StorageInsightsDatasetConfig#source_projects}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts"></a>

```go
Timeouts StorageInsightsDatasetConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#timeouts StorageInsightsDatasetConfig#timeouts}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets {
	CloudStorageBuckets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>interface{}</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```go
CloudStorageBuckets interface{}
```

- *Type:* interface{}

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {
	BucketName: *string,
	BucketPrefixRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>*string</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```go
BucketPrefixRegex *string
```

- *Type:* *string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigIdentity <a name="StorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type">Type</a></code> | <code>*string</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#type StorageInsightsDatasetConfig#type}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets {
	CloudStorageBuckets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>interface{}</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```go
CloudStorageBuckets interface{}
```

- *Type:* interface{}

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {
	BucketName: *string,
	BucketPrefixRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>*string</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```go
BucketPrefixRegex *string
```

- *Type:* *string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigLink <a name="StorageInsightsDatasetConfigLink" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigLink {

}
```


### StorageInsightsDatasetConfigSourceFolders <a name="StorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigSourceFolders {
	FolderNumbers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers">FolderNumbers</a></code> | <code>*[]*string</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `FolderNumbers`<sup>Optional</sup> <a name="FolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```go
FolderNumbers *[]*string
```

- *Type:* *[]*string

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#folder_numbers StorageInsightsDatasetConfig#folder_numbers}

---

### StorageInsightsDatasetConfigSourceProjects <a name="StorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigSourceProjects {
	ProjectNumbers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers">ProjectNumbers</a></code> | <code>*[]*string</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `ProjectNumbers`<sup>Optional</sup> <a name="ProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```go
ProjectNumbers *[]*string
```

- *Type:* *[]*string

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project_numbers StorageInsightsDatasetConfig#project_numbers}

---

### StorageInsightsDatasetConfigTimeouts <a name="StorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

&storageinsightsdatasetconfig.StorageInsightsDatasetConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```go
func ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```go
func BucketPrefixRegexInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```go
func BucketPrefixRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```go
func PutCloudStorageBuckets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```go
func CloudStorageBuckets() StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```go
func CloudStorageBucketsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigIdentityOutputReference <a name="StorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```go
func ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```go
func BucketPrefixRegexInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```go
func BucketPrefixRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```go
func PutCloudStorageBuckets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```go
func CloudStorageBuckets() StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```go
func CloudStorageBucketsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigLinkList <a name="StorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageInsightsDatasetConfigLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get"></a>

```go
func Get(index *f64) StorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StorageInsightsDatasetConfigLinkOutputReference <a name="StorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageInsightsDatasetConfigLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked">Linked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Linked`<sup>Required</sup> <a name="Linked" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```go
func Linked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigLink
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a>

---


### StorageInsightsDatasetConfigSourceFoldersOutputReference <a name="StorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigSourceFoldersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigSourceFoldersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">ResetFolderNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFolderNumbers` <a name="ResetFolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```go
func ResetFolderNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">FolderNumbersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">FolderNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderNumbersInput`<sup>Optional</sup> <a name="FolderNumbersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```go
func FolderNumbersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FolderNumbers`<sup>Required</sup> <a name="FolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```go
func FolderNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---


### StorageInsightsDatasetConfigSourceProjectsOutputReference <a name="StorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigSourceProjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigSourceProjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">ResetProjectNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectNumbers` <a name="ResetProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```go
func ResetProjectNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">ProjectNumbersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">ProjectNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectNumbersInput`<sup>Optional</sup> <a name="ProjectNumbersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```go
func ProjectNumbersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectNumbers`<sup>Required</sup> <a name="ProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```go
func ProjectNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---


### StorageInsightsDatasetConfigTimeoutsOutputReference <a name="StorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storageinsightsdatasetconfig"

storageinsightsdatasetconfig.NewStorageInsightsDatasetConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsDatasetConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



