# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-google.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-google.storageBucket.StorageBucket"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucket(scope Construct, id *string, config StorageBucketConfig) StorageBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass">PutAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig">PutCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule">PutLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putVersioning">PutVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putWebsite">PutWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass">ResetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig">ResetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold">ResetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule">ResetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention">ResetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays">ResetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess">ResetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning">ResetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoclass` <a name="PutAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass"></a>

```go
func PutAutoclass(value StorageBucketAutoclass)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors"></a>

```go
func PutCors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomPlacementConfig` <a name="PutCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig"></a>

```go
func PutCustomPlacementConfig(value StorageBucketCustomPlacementConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption"></a>

```go
func PutEncryption(value StorageBucketEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `PutLifecycleRule` <a name="PutLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule"></a>

```go
func PutLifecycleRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging"></a>

```go
func PutLogging(value StorageBucketLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value StorageBucketRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts"></a>

```go
func PutTimeouts(value StorageBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `PutVersioning` <a name="PutVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning"></a>

```go
func PutVersioning(value StorageBucketVersioning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `PutWebsite` <a name="PutWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite"></a>

```go
func PutWebsite(value StorageBucketWebsite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `ResetAutoclass` <a name="ResetAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass"></a>

```go
func ResetAutoclass()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCors"></a>

```go
func ResetCors()
```

##### `ResetCustomPlacementConfig` <a name="ResetCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig"></a>

```go
func ResetCustomPlacementConfig()
```

##### `ResetDefaultEventBasedHold` <a name="ResetDefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold"></a>

```go
func ResetDefaultEventBasedHold()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLifecycleRule` <a name="ResetLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule"></a>

```go
func ResetLifecycleRule()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageBucket.StorageBucket.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublicAccessPrevention` <a name="ResetPublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention"></a>

```go
func ResetPublicAccessPrevention()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays"></a>

```go
func ResetRequesterPays()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUniformBucketLevelAccess` <a name="ResetUniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess"></a>

```go
func ResetUniformBucketLevelAccess()
```

##### `ResetVersioning` <a name="ResetVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning"></a>

```go
func ResetVersioning()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite"></a>

```go
func ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.StorageBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.StorageBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.StorageBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule">LifecycleRule</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput">AutoclassInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput">CorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput">CustomPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput">DefaultEventBasedHoldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput">LifecycleRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput">PublicAccessPreventionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput">UniformBucketLevelAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput">VersioningInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput">WebsiteInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageBucket.StorageBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucket.StorageBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucket.StorageBucket.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoclass`<sup>Required</sup> <a name="Autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass"></a>

```go
func Autoclass() StorageBucketAutoclassOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cors"></a>

```go
func Cors() StorageBucketCorsList
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a>

---

##### `CustomPlacementConfig`<sup>Required</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig"></a>

```go
func CustomPlacementConfig() StorageBucketCustomPlacementConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryption"></a>

```go
func Encryption() StorageBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a>

---

##### `LifecycleRule`<sup>Required</sup> <a name="LifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule"></a>

```go
func LifecycleRule() StorageBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google.storageBucket.StorageBucket.property.logging"></a>

```go
func Logging() StorageBucketLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a>

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy"></a>

```go
func RetentionPolicy() StorageBucketRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts"></a>

```go
func Timeouts() StorageBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.storageBucket.StorageBucket.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Versioning`<sup>Required</sup> <a name="Versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioning"></a>

```go
func Versioning() StorageBucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a>

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-google.storageBucket.StorageBucket.property.website"></a>

```go
func Website() StorageBucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a>

---

##### `AutoclassInput`<sup>Optional</sup> <a name="AutoclassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput"></a>

```go
func AutoclassInput() StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput"></a>

```go
func CorsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomPlacementConfigInput`<sup>Optional</sup> <a name="CustomPlacementConfigInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput"></a>

```go
func CustomPlacementConfigInput() StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `DefaultEventBasedHoldInput`<sup>Optional</sup> <a name="DefaultEventBasedHoldInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput"></a>

```go
func DefaultEventBasedHoldInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput"></a>

```go
func EncryptionInput() StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LifecycleRuleInput`<sup>Optional</sup> <a name="LifecycleRuleInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput"></a>

```go
func LifecycleRuleInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput"></a>

```go
func LoggingInput() StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublicAccessPreventionInput`<sup>Optional</sup> <a name="PublicAccessPreventionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput"></a>

```go
func PublicAccessPreventionInput() *string
```

- *Type:* *string

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput"></a>

```go
func RequesterPaysInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UniformBucketLevelAccessInput`<sup>Optional</sup> <a name="UniformBucketLevelAccessInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput"></a>

```go
func UniformBucketLevelAccessInput() interface{}
```

- *Type:* interface{}

---

##### `VersioningInput`<sup>Optional</sup> <a name="VersioningInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput"></a>

```go
func VersioningInput() StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput"></a>

```go
func WebsiteInput() StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `DefaultEventBasedHold`<sup>Required</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold"></a>

```go
func DefaultEventBasedHold() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageBucket.StorageBucket.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucket.StorageBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageBucket.StorageBucket.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublicAccessPrevention`<sup>Required</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention"></a>

```go
func PublicAccessPrevention() *string
```

- *Type:* *string

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays"></a>

```go
func RequesterPays() interface{}
```

- *Type:* interface{}

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `UniformBucketLevelAccess`<sup>Required</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess"></a>

```go
func UniformBucketLevelAccess() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAutoclass <a name="StorageBucketAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketAutoclass {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled">Enabled</a></code> | <code>interface{}</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Autoclass: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketAutoclass,
	Cors: interface{},
	CustomPlacementConfig: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketCustomPlacementConfig,
	DefaultEventBasedHold: interface{},
	Encryption: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketEncryption,
	ForceDestroy: interface{},
	Id: *string,
	Labels: *map[string]*string,
	LifecycleRule: interface{},
	Logging: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketLogging,
	Project: *string,
	PublicAccessPrevention: *string,
	RequesterPays: interface{},
	RetentionPolicy: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketRetentionPolicy,
	StorageClass: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketTimeouts,
	UniformBucketLevelAccess: interface{},
	Versioning: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketVersioning,
	Website: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketWebsite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location">Location</a></code> | <code>*string</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name">Name</a></code> | <code>*string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors">Cors</a></code> | <code>interface{}</code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>interface{}</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule">LifecycleRule</a></code> | <code>interface{}</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>*string</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>interface{}</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#location StorageBucket#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#name StorageBucket#name}

---

##### `Autoclass`<sup>Optional</sup> <a name="Autoclass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass"></a>

```go
Autoclass StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors"></a>

```go
Cors interface{}
```

- *Type:* interface{}

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#cors StorageBucket#cors}

---

##### `CustomPlacementConfig`<sup>Optional</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig"></a>

```go
CustomPlacementConfig StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `DefaultEventBasedHold`<sup>Optional</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold"></a>

```go
DefaultEventBasedHold interface{}
```

- *Type:* interface{}

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption"></a>

```go
Encryption StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#encryption StorageBucket#encryption}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#labels StorageBucket#labels}

---

##### `LifecycleRule`<sup>Optional</sup> <a name="LifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule"></a>

```go
LifecycleRule interface{}
```

- *Type:* interface{}

lifecycle_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging"></a>

```go
Logging StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#logging StorageBucket#logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#project StorageBucket#project}

---

##### `PublicAccessPrevention`<sup>Optional</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention"></a>

```go
PublicAccessPrevention *string
```

- *Type:* *string

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays"></a>

```go
RequesterPays interface{}
```

- *Type:* interface{}

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy"></a>

```go
RetentionPolicy StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts"></a>

```go
Timeouts StorageBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `UniformBucketLevelAccess`<sup>Optional</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess"></a>

```go
UniformBucketLevelAccess interface{}
```

- *Type:* interface{}

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `Versioning`<sup>Optional</sup> <a name="Versioning" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning"></a>

```go
Versioning StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#versioning StorageBucket#versioning}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website"></a>

```go
Website StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#website StorageBucket#website}

---

### StorageBucketCors <a name="StorageBucketCors" id="@cdktf/provider-google.storageBucket.StorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketCors {
	MaxAgeSeconds: *f64,
	Method: *[]*string,
	Origin: *[]*string,
	ResponseHeader: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>*f64</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.method">Method</a></code> | <code>*[]*string</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin">Origin</a></code> | <code>*[]*string</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader">ResponseHeader</a></code> | <code>*[]*string</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds"></a>

```go
MaxAgeSeconds *f64
```

- *Type:* *f64

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.method"></a>

```go
Method *[]*string
```

- *Type:* *[]*string

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#method StorageBucket#method}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin"></a>

```go
Origin *[]*string
```

- *Type:* *[]*string

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#origin StorageBucket#origin}

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader"></a>

```go
ResponseHeader *[]*string
```

- *Type:* *[]*string

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#response_header StorageBucket#response_header}

---

### StorageBucketCustomPlacementConfig <a name="StorageBucketCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketCustomPlacementConfig {
	DataLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations">DataLocations</a></code> | <code>*[]*string</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations"></a>

```go
DataLocations *[]*string
```

- *Type:* *[]*string

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#data_locations StorageBucket#data_locations}

---

### StorageBucketEncryption <a name="StorageBucketEncryption" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketEncryption {
	DefaultKmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>*string</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName"></a>

```go
DefaultKmsKeyName *string
```

- *Type:* *string

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

### StorageBucketLifecycleRule <a name="StorageBucketLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketLifecycleRule {
	Action: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketLifecycleRuleAction,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.storageBucket.StorageBucketLifecycleRuleCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action"></a>

```go
Action StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#action StorageBucket#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition"></a>

```go
Condition StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#condition StorageBucket#condition}

---

### StorageBucketLifecycleRuleAction <a name="StorageBucketLifecycleRuleAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketLifecycleRuleAction {
	Type: *string,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type">Type</a></code> | <code>*string</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass">StorageClass</a></code> | <code>*string</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#type StorageBucket#type}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#storage_class StorageBucket#storage_class}

---

### StorageBucketLifecycleRuleCondition <a name="StorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketLifecycleRuleCondition {
	Age: *f64,
	CreatedBefore: *string,
	CustomTimeBefore: *string,
	DaysSinceCustomTime: *f64,
	DaysSinceNoncurrentTime: *f64,
	MatchesPrefix: *[]*string,
	MatchesStorageClass: *[]*string,
	MatchesSuffix: *[]*string,
	NoncurrentTimeBefore: *string,
	NumNewerVersions: *f64,
	WithState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age">Age</a></code> | <code>*f64</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore">CustomTimeBefore</a></code> | <code>*string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>*f64</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>*f64</code> | Number of days elapsed since the noncurrent timestamp of an object. This 							condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix">MatchesPrefix</a></code> | <code>*[]*string</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>*[]*string</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix">MatchesSuffix</a></code> | <code>*[]*string</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>*string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions">NumNewerVersions</a></code> | <code>*f64</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState">WithState</a></code> | <code>*string</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `Age`<sup>Optional</sup> <a name="Age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age"></a>

```go
Age *f64
```

- *Type:* *f64

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#age StorageBucket#age}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#created_before StorageBucket#created_before}

---

##### `CustomTimeBefore`<sup>Optional</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```go
CustomTimeBefore *string
```

- *Type:* *string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

##### `DaysSinceCustomTime`<sup>Optional</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```go
DaysSinceCustomTime *f64
```

- *Type:* *f64

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

##### `DaysSinceNoncurrentTime`<sup>Optional</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```go
DaysSinceNoncurrentTime *f64
```

- *Type:* *f64

Number of days elapsed since the noncurrent timestamp of an object. This 							condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

##### `MatchesPrefix`<sup>Optional</sup> <a name="MatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```go
MatchesPrefix *[]*string
```

- *Type:* *[]*string

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

##### `MatchesStorageClass`<sup>Optional</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```go
MatchesStorageClass *[]*string
```

- *Type:* *[]*string

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

##### `MatchesSuffix`<sup>Optional</sup> <a name="MatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```go
MatchesSuffix *[]*string
```

- *Type:* *[]*string

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

##### `NoncurrentTimeBefore`<sup>Optional</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```go
NoncurrentTimeBefore *string
```

- *Type:* *string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

##### `NumNewerVersions`<sup>Optional</sup> <a name="NumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```go
NumNewerVersions *f64
```

- *Type:* *f64

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

##### `WithState`<sup>Optional</sup> <a name="WithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState"></a>

```go
WithState *string
```

- *Type:* *string

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#with_state StorageBucket#with_state}

---

### StorageBucketLogging <a name="StorageBucketLogging" id="@cdktf/provider-google.storageBucket.StorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketLogging {
	LogBucket: *string,
	LogObjectPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket">LogBucket</a></code> | <code>*string</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>*string</code> | The object prefix for log objects. |

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket"></a>

```go
LogBucket *string
```

- *Type:* *string

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#log_bucket StorageBucket#log_bucket}

---

##### `LogObjectPrefix`<sup>Optional</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix"></a>

```go
LogObjectPrefix *string
```

- *Type:* *string

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

### StorageBucketRetentionPolicy <a name="StorageBucketRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketRetentionPolicy {
	RetentionPeriod: *f64,
	IsLocked: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked">IsLocked</a></code> | <code>interface{}</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod"></a>

```go
RetentionPeriod *f64
```

- *Type:* *f64

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#retention_period StorageBucket#retention_period}

---

##### `IsLocked`<sup>Optional</sup> <a name="IsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked"></a>

```go
IsLocked interface{}
```

- *Type:* interface{}

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#is_locked StorageBucket#is_locked}

---

### StorageBucketTimeouts <a name="StorageBucketTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#create StorageBucket#create}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#read StorageBucket#read}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#update StorageBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#create StorageBucket#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#read StorageBucket#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#update StorageBucket#update}.

---

### StorageBucketVersioning <a name="StorageBucketVersioning" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketVersioning {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled">Enabled</a></code> | <code>interface{}</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketWebsite <a name="StorageBucketWebsite" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

&storagebucket.StorageBucketWebsite {
	MainPageSuffix: *string,
	NotFoundPage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix">MainPageSuffix</a></code> | <code>*string</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage">NotFoundPage</a></code> | <code>*string</code> | The custom object to return when a requested resource is not found. |

---

##### `MainPageSuffix`<sup>Optional</sup> <a name="MainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix"></a>

```go
MainPageSuffix *string
```

- *Type:* *string

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

##### `NotFoundPage`<sup>Optional</sup> <a name="NotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage"></a>

```go
NotFoundPage *string
```

- *Type:* *string

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#not_found_page StorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAutoclassOutputReference <a name="StorageBucketAutoclassOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketAutoclassOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketAutoclassOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---


### StorageBucketCorsList <a name="StorageBucketCorsList" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketCorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageBucketCorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get"></a>

```go
func Get(index *f64) StorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBucketCorsOutputReference <a name="StorageBucketCorsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageBucketCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```go
func ResetMaxAgeSeconds()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader"></a>

```go
func ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput">OriginInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method">Method</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin">Origin</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader">ResponseHeader</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```go
func MaxAgeSecondsInput() *f64
```

- *Type:* *f64

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput"></a>

```go
func OriginInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```go
func ResponseHeaderInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```go
func MaxAgeSeconds() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method"></a>

```go
func Method() *[]*string
```

- *Type:* *[]*string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin"></a>

```go
func Origin() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader"></a>

```go
func ResponseHeader() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBucketCustomPlacementConfigOutputReference <a name="StorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketCustomPlacementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketCustomPlacementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">DataLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations">DataLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLocationsInput`<sup>Optional</sup> <a name="DataLocationsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```go
func DataLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```go
func DataLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---


### StorageBucketEncryptionOutputReference <a name="StorageBucketEncryptionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">DefaultKmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultKmsKeyNameInput`<sup>Optional</sup> <a name="DefaultKmsKeyNameInput" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```go
func DefaultKmsKeyNameInput() *string
```

- *Type:* *string

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```go
func DefaultKmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---


### StorageBucketLifecycleRuleActionOutputReference <a name="StorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketLifecycleRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketLifecycleRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```go
func ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---


### StorageBucketLifecycleRuleConditionOutputReference <a name="StorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketLifecycleRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketLifecycleRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge">ResetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">ResetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">ResetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">ResetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">ResetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">ResetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">ResetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">ResetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">ResetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState">ResetWithState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAge` <a name="ResetAge" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```go
func ResetAge()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetCustomTimeBefore` <a name="ResetCustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```go
func ResetCustomTimeBefore()
```

##### `ResetDaysSinceCustomTime` <a name="ResetDaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```go
func ResetDaysSinceCustomTime()
```

##### `ResetDaysSinceNoncurrentTime` <a name="ResetDaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```go
func ResetDaysSinceNoncurrentTime()
```

##### `ResetMatchesPrefix` <a name="ResetMatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```go
func ResetMatchesPrefix()
```

##### `ResetMatchesStorageClass` <a name="ResetMatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```go
func ResetMatchesStorageClass()
```

##### `ResetMatchesSuffix` <a name="ResetMatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```go
func ResetMatchesSuffix()
```

##### `ResetNoncurrentTimeBefore` <a name="ResetNoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```go
func ResetNoncurrentTimeBefore()
```

##### `ResetNumNewerVersions` <a name="ResetNumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```go
func ResetNumNewerVersions()
```

##### `ResetWithState` <a name="ResetWithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```go
func ResetWithState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput">AgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">CustomTimeBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">DaysSinceCustomTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">DaysSinceNoncurrentTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">MatchesPrefixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">MatchesStorageClassInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">MatchesSuffixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">NoncurrentTimeBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">NumNewerVersionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">WithStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age">Age</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">CustomTimeBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">MatchesPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">MatchesSuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">NumNewerVersions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState">WithState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgeInput`<sup>Optional</sup> <a name="AgeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```go
func AgeInput() *f64
```

- *Type:* *f64

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `CustomTimeBeforeInput`<sup>Optional</sup> <a name="CustomTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```go
func CustomTimeBeforeInput() *string
```

- *Type:* *string

---

##### `DaysSinceCustomTimeInput`<sup>Optional</sup> <a name="DaysSinceCustomTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```go
func DaysSinceCustomTimeInput() *f64
```

- *Type:* *f64

---

##### `DaysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="DaysSinceNoncurrentTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```go
func DaysSinceNoncurrentTimeInput() *f64
```

- *Type:* *f64

---

##### `MatchesPrefixInput`<sup>Optional</sup> <a name="MatchesPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```go
func MatchesPrefixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchesStorageClassInput`<sup>Optional</sup> <a name="MatchesStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```go
func MatchesStorageClassInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchesSuffixInput`<sup>Optional</sup> <a name="MatchesSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```go
func MatchesSuffixInput() *[]*string
```

- *Type:* *[]*string

---

##### `NoncurrentTimeBeforeInput`<sup>Optional</sup> <a name="NoncurrentTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```go
func NoncurrentTimeBeforeInput() *string
```

- *Type:* *string

---

##### `NumNewerVersionsInput`<sup>Optional</sup> <a name="NumNewerVersionsInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```go
func NumNewerVersionsInput() *f64
```

- *Type:* *f64

---

##### `WithStateInput`<sup>Optional</sup> <a name="WithStateInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```go
func WithStateInput() *string
```

- *Type:* *string

---

##### `Age`<sup>Required</sup> <a name="Age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```go
func Age() *f64
```

- *Type:* *f64

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `CustomTimeBefore`<sup>Required</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```go
func CustomTimeBefore() *string
```

- *Type:* *string

---

##### `DaysSinceCustomTime`<sup>Required</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```go
func DaysSinceCustomTime() *f64
```

- *Type:* *f64

---

##### `DaysSinceNoncurrentTime`<sup>Required</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```go
func DaysSinceNoncurrentTime() *f64
```

- *Type:* *f64

---

##### `MatchesPrefix`<sup>Required</sup> <a name="MatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```go
func MatchesPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchesStorageClass`<sup>Required</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```go
func MatchesStorageClass() *[]*string
```

- *Type:* *[]*string

---

##### `MatchesSuffix`<sup>Required</sup> <a name="MatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```go
func MatchesSuffix() *[]*string
```

- *Type:* *[]*string

---

##### `NoncurrentTimeBefore`<sup>Required</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```go
func NoncurrentTimeBefore() *string
```

- *Type:* *string

---

##### `NumNewerVersions`<sup>Required</sup> <a name="NumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```go
func NumNewerVersions() *f64
```

- *Type:* *f64

---

##### `WithState`<sup>Required</sup> <a name="WithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```go
func WithState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


### StorageBucketLifecycleRuleList <a name="StorageBucketLifecycleRuleList" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketLifecycleRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageBucketLifecycleRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get"></a>

```go
func Get(index *f64) StorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBucketLifecycleRuleOutputReference <a name="StorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketLifecycleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageBucketLifecycleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction"></a>

```go
func PutAction(value StorageBucketLifecycleRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition"></a>

```go
func PutCondition(value StorageBucketLifecycleRuleCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action"></a>

```go
func Action() StorageBucketLifecycleRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition"></a>

```go
func Condition() StorageBucketLifecycleRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```go
func ConditionInput() StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBucketLoggingOutputReference <a name="StorageBucketLoggingOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix">ResetLogObjectPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogObjectPrefix` <a name="ResetLogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```go
func ResetLogObjectPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput">LogBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput">LogObjectPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket">LogBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput"></a>

```go
func LogBucketInput() *string
```

- *Type:* *string

---

##### `LogObjectPrefixInput`<sup>Optional</sup> <a name="LogObjectPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```go
func LogObjectPrefixInput() *string
```

- *Type:* *string

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket"></a>

```go
func LogBucket() *string
```

- *Type:* *string

---

##### `LogObjectPrefix`<sup>Required</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```go
func LogObjectPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---


### StorageBucketRetentionPolicyOutputReference <a name="StorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked">ResetIsLocked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLocked` <a name="ResetIsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```go
func ResetIsLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput">IsLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked">IsLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLockedInput`<sup>Optional</sup> <a name="IsLockedInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```go
func IsLockedInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `IsLocked`<sup>Required</sup> <a name="IsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```go
func IsLocked() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---


### StorageBucketTimeoutsOutputReference <a name="StorageBucketTimeoutsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBucketVersioningOutputReference <a name="StorageBucketVersioningOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketVersioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketVersioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---


### StorageBucketWebsiteOutputReference <a name="StorageBucketWebsiteOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucket"

storagebucket.NewStorageBucketWebsiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketWebsiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix">ResetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage">ResetNotFoundPage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMainPageSuffix` <a name="ResetMainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```go
func ResetMainPageSuffix()
```

##### `ResetNotFoundPage` <a name="ResetNotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```go
func ResetNotFoundPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput">MainPageSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput">NotFoundPageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix">MainPageSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage">NotFoundPage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MainPageSuffixInput`<sup>Optional</sup> <a name="MainPageSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```go
func MainPageSuffixInput() *string
```

- *Type:* *string

---

##### `NotFoundPageInput`<sup>Optional</sup> <a name="NotFoundPageInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```go
func NotFoundPageInput() *string
```

- *Type:* *string

---

##### `MainPageSuffix`<sup>Required</sup> <a name="MainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```go
func MainPageSuffix() *string
```

- *Type:* *string

---

##### `NotFoundPage`<sup>Required</sup> <a name="NotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```go
func NotFoundPage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---



