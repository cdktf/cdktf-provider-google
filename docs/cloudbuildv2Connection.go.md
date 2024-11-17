# `cloudbuildv2Connection` Submodule <a name="`cloudbuildv2Connection` Submodule" id="@cdktf/provider-google.cloudbuildv2Connection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2Connection <a name="Cloudbuildv2Connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection google_cloudbuildv2_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2Connection(scope Construct, id *string, config Cloudbuildv2ConnectionConfig) Cloudbuildv2Connection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig">Cloudbuildv2ConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig">Cloudbuildv2ConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig">PutBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig">PutBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig">PutGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig">PutGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig">PutGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketCloudConfig">ResetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketDataCenterConfig">ResetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig">ResetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig">ResetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBitbucketCloudConfig` <a name="PutBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig"></a>

```go
func PutBitbucketCloudConfig(value Cloudbuildv2ConnectionBitbucketCloudConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `PutBitbucketDataCenterConfig` <a name="PutBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig"></a>

```go
func PutBitbucketDataCenterConfig(value Cloudbuildv2ConnectionBitbucketDataCenterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `PutGithubConfig` <a name="PutGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig"></a>

```go
func PutGithubConfig(value Cloudbuildv2ConnectionGithubConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `PutGithubEnterpriseConfig` <a name="PutGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig"></a>

```go
func PutGithubEnterpriseConfig(value Cloudbuildv2ConnectionGithubEnterpriseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `PutGitlabConfig` <a name="PutGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig"></a>

```go
func PutGitlabConfig(value Cloudbuildv2ConnectionGitlabConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts"></a>

```go
func PutTimeouts(value Cloudbuildv2ConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBitbucketCloudConfig` <a name="ResetBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketCloudConfig"></a>

```go
func ResetBitbucketCloudConfig()
```

##### `ResetBitbucketDataCenterConfig` <a name="ResetBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketDataCenterConfig"></a>

```go
func ResetBitbucketDataCenterConfig()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetGithubConfig` <a name="ResetGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig"></a>

```go
func ResetGithubConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetGitlabConfig` <a name="ResetGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig"></a>

```go
func ResetGitlabConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.Cloudbuildv2Connection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.Cloudbuildv2Connection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.Cloudbuildv2Connection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.Cloudbuildv2Connection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Cloudbuildv2Connection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Cloudbuildv2Connection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2Connection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState">InstallationState</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfigInput">BitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfigInput">BitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput">GithubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput">GitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BitbucketCloudConfig`<sup>Required</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfig"></a>

```go
func BitbucketCloudConfig() Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a>

---

##### `BitbucketDataCenterConfig`<sup>Required</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfig"></a>

```go
func BitbucketDataCenterConfig() Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GithubConfig`<sup>Required</sup> <a name="GithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig"></a>

```go
func GithubConfig() Cloudbuildv2ConnectionGithubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a>

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `GitlabConfig`<sup>Required</sup> <a name="GitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig"></a>

```go
func GitlabConfig() Cloudbuildv2ConnectionGitlabConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a>

---

##### `InstallationState`<sup>Required</sup> <a name="InstallationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState"></a>

```go
func InstallationState() Cloudbuildv2ConnectionInstallationStateList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts"></a>

```go
func Timeouts() Cloudbuildv2ConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BitbucketCloudConfigInput`<sup>Optional</sup> <a name="BitbucketCloudConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfigInput"></a>

```go
func BitbucketCloudConfigInput() Cloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `BitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="BitbucketDataCenterConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfigInput"></a>

```go
func BitbucketDataCenterConfigInput() Cloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `GithubConfigInput`<sup>Optional</sup> <a name="GithubConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput"></a>

```go
func GithubConfigInput() Cloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() Cloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `GitlabConfigInput`<sup>Optional</sup> <a name="GitlabConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput"></a>

```go
func GitlabConfigInput() Cloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2ConnectionBitbucketCloudConfig <a name="Cloudbuildv2ConnectionBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketCloudConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.workspace">Workspace</a></code> | <code>*string</code> | The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#workspace Cloudbuildv2Connection#workspace}

---

### Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfig <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential,
	HostUri: *string,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig,
	SslCa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to the Bitbucket Data Center. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to the Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionConfig <a name="Cloudbuildv2ConnectionConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	BitbucketCloudConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig,
	BitbucketDataCenterConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig,
	Disabled: interface{},
	GithubConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig,
	GithubEnterpriseConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig,
	GitlabConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Immutable. The resource name of the connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If disabled is set to true, functionality is disabled for this connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#location Cloudbuildv2Connection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable. The resource name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#name Cloudbuildv2Connection#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#annotations Cloudbuildv2Connection#annotations}

---

##### `BitbucketCloudConfig`<sup>Optional</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketCloudConfig"></a>

```go
BitbucketCloudConfig Cloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#bitbucket_cloud_config Cloudbuildv2Connection#bitbucket_cloud_config}

---

##### `BitbucketDataCenterConfig`<sup>Optional</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig"></a>

```go
BitbucketDataCenterConfig Cloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#bitbucket_data_center_config Cloudbuildv2Connection#bitbucket_data_center_config}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If disabled is set to true, functionality is disabled for this connection.

Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#disabled Cloudbuildv2Connection#disabled}

---

##### `GithubConfig`<sup>Optional</sup> <a name="GithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig"></a>

```go
GithubConfig Cloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#github_config Cloudbuildv2Connection#github_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig Cloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#github_enterprise_config Cloudbuildv2Connection#github_enterprise_config}

---

##### `GitlabConfig`<sup>Optional</sup> <a name="GitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig"></a>

```go
GitlabConfig Cloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#gitlab_config Cloudbuildv2Connection#gitlab_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts"></a>

```go
Timeouts Cloudbuildv2ConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#timeouts Cloudbuildv2Connection#timeouts}

---

### Cloudbuildv2ConnectionGithubConfig <a name="Cloudbuildv2ConnectionGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGithubConfig {
	AppInstallationId: *f64,
	AuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId"></a>

```go
AppInstallationId *f64
```

- *Type:* *f64

GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `AuthorizerCredential`<sup>Optional</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential Cloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

### Cloudbuildv2ConnectionGithubConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential {
	OauthTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `OauthTokenSecretVersion`<sup>Optional</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```go
OauthTokenSecretVersion *string
```

- *Type:* *string

A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#oauth_token_secret_version Cloudbuildv2Connection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGithubEnterpriseConfig {
	HostUri: *string,
	AppId: *f64,
	AppInstallationId: *f64,
	AppSlug: *string,
	PrivateKeySecretVersion: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig,
	SslCa: *string,
	WebhookSecretSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId">AppId</a></code> | <code>*f64</code> | Id of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug">AppSlug</a></code> | <code>*string</code> | The URL-friendly name of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId"></a>

```go
AppId *f64
```

- *Type:* *f64

Id of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#app_id Cloudbuildv2Connection#app_id}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```go
AppInstallationId *f64
```

- *Type:* *f64

ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `AppSlug`<sup>Optional</sup> <a name="AppSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug"></a>

```go
AppSlug *string
```

- *Type:* *string

The URL-friendly name of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#app_slug Cloudbuildv2Connection#app_slug}

---

##### `PrivateKeySecretVersion`<sup>Optional</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```go
PrivateKeySecretVersion *string
```

- *Type:* *string

SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#private_key_secret_version Cloudbuildv2Connection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

##### `WebhookSecretSecretVersion`<sup>Optional</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionGitlabConfig <a name="Cloudbuildv2ConnectionGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGitlabConfig {
	AuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential,
	ReadAuthorizerCredential: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential,
	WebhookSecretSecretVersion: *string,
	HostUri: *string,
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig,
	SslCa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to GitLab Enterprise. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential"></a>

```go
AuthorizerCredential Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```go
ReadAuthorizerCredential Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```go
WebhookSecretSecretVersion *string
```

- *Type:* *string

Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `HostUri`<sup>Optional</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to GitLab Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential {
	UserTokenSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```go
UserTokenSecretVersion *string
```

- *Type:* *string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionInstallationState <a name="Cloudbuildv2ConnectionInstallationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionInstallationState {

}
```


### Cloudbuildv2ConnectionTimeouts <a name="Cloudbuildv2ConnectionTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

&cloudbuildv2connection.Cloudbuildv2ConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketCloudConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---


### Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion">ResetOauthTokenSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthTokenSecretVersion` <a name="ResetOauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion"></a>

```go
func ResetOauthTokenSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">OauthTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersionInput`<sup>Optional</sup> <a name="OauthTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```go
func OauthTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```go
func OauthTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGithubConfigOutputReference <a name="Cloudbuildv2ConnectionGithubConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGithubConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGithubConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential">ResetAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value Cloudbuildv2ConnectionGithubConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetAuthorizerCredential` <a name="ResetAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```go
func ResetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() Cloudbuildv2ConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug">ResetAppSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">ResetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">ResetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```go
func ResetAppId()
```

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```go
func ResetAppInstallationId()
```

##### `ResetAppSlug` <a name="ResetAppSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug"></a>

```go
func ResetAppSlug()
```

##### `ResetPrivateKeySecretVersion` <a name="ResetPrivateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```go
func ResetPrivateKeySecretVersion()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```

##### `ResetWebhookSecretSecretVersion` <a name="ResetWebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```go
func ResetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput">AppSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">PrivateKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId">AppId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug">AppSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *f64
```

- *Type:* *f64

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```go
func AppInstallationIdInput() *f64
```

- *Type:* *f64

---

##### `AppSlugInput`<sup>Optional</sup> <a name="AppSlugInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput"></a>

```go
func AppSlugInput() *string
```

- *Type:* *string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersionInput`<sup>Optional</sup> <a name="PrivateKeySecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```go
func PrivateKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```go
func AppId() *f64
```

- *Type:* *f64

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```go
func AppInstallationId() *f64
```

- *Type:* *f64

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```go
func AppSlug() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `PrivateKeySecretVersion`<sup>Required</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```go
func PrivateKeySecretVersion() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGitlabConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGitlabConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri">ResetHostUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa">ResetSslCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```go
func PutAuthorizerCredential(value Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```go
func PutReadAuthorizerCredential(value Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `ResetHostUri` <a name="ResetHostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri"></a>

```go
func ResetHostUri()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa"></a>

```go
func ResetSslCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```go
func AuthorizerCredential() Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```go
func ReadAuthorizerCredential() Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```go
func AuthorizerCredentialInput() Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```go
func ReadAuthorizerCredentialInput() Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```go
func WebhookSecretSecretVersionInput() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```go
func WebhookSecretSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```go
func UserTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```go
func UserTokenSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionInstallationStateList <a name="Cloudbuildv2ConnectionInstallationStateList" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionInstallationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Cloudbuildv2ConnectionInstallationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get"></a>

```go
func Get(index *f64) Cloudbuildv2ConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Cloudbuildv2ConnectionInstallationStateOutputReference <a name="Cloudbuildv2ConnectionInstallationStateOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionInstallationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Cloudbuildv2ConnectionInstallationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri">ActionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionUri`<sup>Required</sup> <a name="ActionUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri"></a>

```go
func ActionUri() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudbuildv2ConnectionInstallationState
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a>

---


### Cloudbuildv2ConnectionTimeoutsOutputReference <a name="Cloudbuildv2ConnectionTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildv2connection"

cloudbuildv2connection.NewCloudbuildv2ConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudbuildv2ConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



