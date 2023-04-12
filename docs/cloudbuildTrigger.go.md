# `cloudbuildTrigger` Submodule <a name="`cloudbuildTrigger` Submodule" id="@cdktf/provider-google.cloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildTrigger <a name="CloudbuildTrigger" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTrigger(scope Construct, id *string, config CloudbuildTriggerConfig) CloudbuildTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig">CloudbuildTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig">CloudbuildTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig">PutApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig">PutBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource">PutGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig">PutPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild">PutSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate">PutTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig">PutWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig">ResetApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig">ResetBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource">ResetGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles">ResetIgnoredFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs">ResetIncludeBuildLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles">ResetIncludedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig">ResetPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild">ResetSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate">ResetTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig">ResetWebhookConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApprovalConfig` <a name="PutApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig"></a>

```go
func PutApprovalConfig(value CloudbuildTriggerApprovalConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `PutBitbucketServerTriggerConfig` <a name="PutBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig"></a>

```go
func PutBitbucketServerTriggerConfig(value CloudbuildTriggerBitbucketServerTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute"></a>

```go
func PutBuildAttribute(value CloudbuildTriggerBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `PutGitFileSource` <a name="PutGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource"></a>

```go
func PutGitFileSource(value CloudbuildTriggerGitFileSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub"></a>

```go
func PutGithub(value CloudbuildTriggerGithub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `PutPubsubConfig` <a name="PutPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig"></a>

```go
func PutPubsubConfig(value CloudbuildTriggerPubsubConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `PutSourceToBuild` <a name="PutSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild"></a>

```go
func PutSourceToBuild(value CloudbuildTriggerSourceToBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts"></a>

```go
func PutTimeouts(value CloudbuildTriggerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

---

##### `PutTriggerTemplate` <a name="PutTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate"></a>

```go
func PutTriggerTemplate(value CloudbuildTriggerTriggerTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `PutWebhookConfig` <a name="PutWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig"></a>

```go
func PutWebhookConfig(value CloudbuildTriggerWebhookConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `ResetApprovalConfig` <a name="ResetApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig"></a>

```go
func ResetApprovalConfig()
```

##### `ResetBitbucketServerTriggerConfig` <a name="ResetBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig"></a>

```go
func ResetBitbucketServerTriggerConfig()
```

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute"></a>

```go
func ResetBuildAttribute()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGitFileSource` <a name="ResetGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource"></a>

```go
func ResetGitFileSource()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoredFiles` <a name="ResetIgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles"></a>

```go
func ResetIgnoredFiles()
```

##### `ResetIncludeBuildLogs` <a name="ResetIncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs"></a>

```go
func ResetIncludeBuildLogs()
```

##### `ResetIncludedFiles` <a name="ResetIncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles"></a>

```go
func ResetIncludedFiles()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubConfig` <a name="ResetPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig"></a>

```go
func ResetPubsubConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSourceToBuild` <a name="ResetSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild"></a>

```go
func ResetSourceToBuild()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerTemplate` <a name="ResetTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate"></a>

```go
func ResetTriggerTemplate()
```

##### `ResetWebhookConfig` <a name="ResetWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig"></a>

```go
func ResetWebhookConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.CloudbuildTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.CloudbuildTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.CloudbuildTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput">ApprovalConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput">BitbucketServerTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput">BuildAttributeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput">GitFileSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput">GithubInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput">IgnoredFilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput">IncludeBuildLogsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput">IncludedFilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput">PubsubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput">SourceToBuildInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput">TriggerTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput">WebhookConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles">IgnoredFiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles">IncludedFiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalConfig`<sup>Required</sup> <a name="ApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig"></a>

```go
func ApprovalConfig() CloudbuildTriggerApprovalConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a>

---

##### `BitbucketServerTriggerConfig`<sup>Required</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```go
func BitbucketServerTriggerConfig() CloudbuildTriggerBitbucketServerTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a>

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute"></a>

```go
func BuildAttribute() CloudbuildTriggerBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `GitFileSource`<sup>Required</sup> <a name="GitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource"></a>

```go
func GitFileSource() CloudbuildTriggerGitFileSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github"></a>

```go
func Github() CloudbuildTriggerGithubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a>

---

##### `PubsubConfig`<sup>Required</sup> <a name="PubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig"></a>

```go
func PubsubConfig() CloudbuildTriggerPubsubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a>

---

##### `SourceToBuild`<sup>Required</sup> <a name="SourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild"></a>

```go
func SourceToBuild() CloudbuildTriggerSourceToBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts"></a>

```go
func Timeouts() CloudbuildTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a>

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `TriggerTemplate`<sup>Required</sup> <a name="TriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate"></a>

```go
func TriggerTemplate() CloudbuildTriggerTriggerTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a>

---

##### `WebhookConfig`<sup>Required</sup> <a name="WebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig"></a>

```go
func WebhookConfig() CloudbuildTriggerWebhookConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a>

---

##### `ApprovalConfigInput`<sup>Optional</sup> <a name="ApprovalConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput"></a>

```go
func ApprovalConfigInput() CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `BitbucketServerTriggerConfigInput`<sup>Optional</sup> <a name="BitbucketServerTriggerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput"></a>

```go
func BitbucketServerTriggerConfigInput() CloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `GitFileSourceInput`<sup>Optional</sup> <a name="GitFileSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput"></a>

```go
func GitFileSourceInput() CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput"></a>

```go
func GithubInput() CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoredFilesInput`<sup>Optional</sup> <a name="IgnoredFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput"></a>

```go
func IgnoredFilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBuildLogsInput`<sup>Optional</sup> <a name="IncludeBuildLogsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput"></a>

```go
func IncludeBuildLogsInput() *string
```

- *Type:* *string

---

##### `IncludedFilesInput`<sup>Optional</sup> <a name="IncludedFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput"></a>

```go
func IncludedFilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubConfigInput`<sup>Optional</sup> <a name="PubsubConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput"></a>

```go
func PubsubConfigInput() CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceToBuildInput`<sup>Optional</sup> <a name="SourceToBuildInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput"></a>

```go
func SourceToBuildInput() CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerTemplateInput`<sup>Optional</sup> <a name="TriggerTemplateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput"></a>

```go
func TriggerTemplateInput() CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `WebhookConfigInput`<sup>Optional</sup> <a name="WebhookConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput"></a>

```go
func WebhookConfigInput() CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoredFiles`<sup>Required</sup> <a name="IgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles"></a>

```go
func IgnoredFiles() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBuildLogs`<sup>Required</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs"></a>

```go
func IncludeBuildLogs() *string
```

- *Type:* *string

---

##### `IncludedFiles`<sup>Required</sup> <a name="IncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles"></a>

```go
func IncludedFiles() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildTriggerApprovalConfig <a name="CloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerApprovalConfig {
	ApprovalRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>interface{}</code> | Whether or not approval is needed. |

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired"></a>

```go
ApprovalRequired interface{}
```

- *Type:* interface{}

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_required CloudbuildTrigger#approval_required}

---

### CloudbuildTriggerBitbucketServerTriggerConfig <a name="CloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBitbucketServerTriggerConfig {
	BitbucketServerConfigResource: *string,
	ProjectKey: *string,
	RepoSlug: *string,
	PullRequest: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest,
	Push: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>*string</code> | The Bitbucket server config resource that this trigger config maps to. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | Slug of the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | push block. |

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource"></a>

```go
BitbucketServerConfigResource *string
```

- *Type:* *string

The Bitbucket server config resource that this trigger config maps to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bitbucket_server_config_resource CloudbuildTrigger#bitbucket_server_config_resource}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_key CloudbuildTrigger#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug"></a>

```go
RepoSlug *string
```

- *Type:* *string

Slug of the repository.

A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_slug CloudbuildTrigger#repo_slug}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest"></a>

```go
PullRequest CloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push"></a>

```go
Push CloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest {
	Branch: *string,
	CommentControl: *string,
	InvertRegex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl">CommentControl</a></code> | <code>*string</code> | Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl"></a>

```go
CommentControl *string
```

- *Type:* *string

Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPush <a name="CloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush {
	Branch: *string,
	InvertRegex: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | When true, only trigger a build if the revision regex does NOT match the gitRef regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag">Tag</a></code> | <code>*string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

When true, only trigger a build if the revision regex does NOT match the gitRef regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerBuild <a name="CloudbuildTriggerBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuild {
	Step: interface{},
	Artifacts: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts,
	AvailableSecrets: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets,
	Images: *[]*string,
	LogsBucket: *string,
	Options: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildOptions,
	QueueTtl: *string,
	Secret: interface{},
	Source: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildSource,
	Substitutions: *map[string]*string,
	Tags: *[]*string,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step">Step</a></code> | <code>interface{}</code> | step block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | available_secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images">Images</a></code> | <code>*[]*string</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket">LogsBucket</a></code> | <code>*string</code> | Google Cloud Storage bucket where logs should be written.  Logs file names will be of the format ${logsBucket}/log-${build_id}.txt. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl">QueueTtl</a></code> | <code>*string</code> | TTL in queue for this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags for annotation of a Build. These are not docker tags. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout">Timeout</a></code> | <code>*string</code> | Amount of time that this build should be allowed to run, to second granularity. |

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#step CloudbuildTrigger#step}

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts"></a>

```go
Artifacts CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}

---

##### `AvailableSecrets`<sup>Optional</sup> <a name="AvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets"></a>

```go
AvailableSecrets CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#available_secrets CloudbuildTrigger#available_secrets}

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images"></a>

```go
Images *[]*string
```

- *Type:* *[]*string

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `LogsBucket`<sup>Optional</sup> <a name="LogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket"></a>

```go
LogsBucket *string
```

- *Type:* *string

Google Cloud Storage bucket where logs should be written.  Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options"></a>

```go
Options CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#options CloudbuildTrigger#options}

---

##### `QueueTtl`<sup>Optional</sup> <a name="QueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl"></a>

```go
QueueTtl *string
```

- *Type:* *string

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source"></a>

```go
Source CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source CloudbuildTrigger#source}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

### CloudbuildTriggerBuildArtifacts <a name="CloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildArtifacts {
	Images: *[]*string,
	Objects: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images">Images</a></code> | <code>*[]*string</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | objects block. |

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images"></a>

```go
Images *[]*string
```

- *Type:* *[]*string

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `Objects`<sup>Optional</sup> <a name="Objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects"></a>

```go
Objects CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#objects CloudbuildTrigger#objects}

---

### CloudbuildTriggerBuildArtifactsObjects <a name="CloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildArtifactsObjects {
	Location: *string,
	Paths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location">Location</a></code> | <code>*string</code> | Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths">Paths</a></code> | <code>*[]*string</code> | Path globs used to match files in the build's workspace. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location"></a>

```go
Location *string
```

- *Type:* *string

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

### CloudbuildTriggerBuildArtifactsObjectsTiming <a name="CloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildArtifactsObjectsTiming {

}
```


### CloudbuildTriggerBuildAvailableSecrets <a name="CloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildAvailableSecrets {
	SecretManager: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager">SecretManager</a></code> | <code>interface{}</code> | secret_manager block. |

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager"></a>

```go
SecretManager interface{}
```

- *Type:* interface{}

secret_manager block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_manager CloudbuildTrigger#secret_manager}

---

### CloudbuildTriggerBuildAvailableSecretsSecretManager <a name="CloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager {
	Env: *string,
	VersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env">Env</a></code> | <code>*string</code> | Environment variable name to associate with the secret. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName">VersionName</a></code> | <code>*string</code> | Resource name of the SecretVersion. In format: projects/*\/secrets/*\/versions/*. |

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env"></a>

```go
Env *string
```

- *Type:* *string

Environment variable name to associate with the secret.

Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Resource name of the SecretVersion. In format: projects/*\/secrets/*\/versions/*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#version_name CloudbuildTrigger#version_name}

---

### CloudbuildTriggerBuildOptions <a name="CloudbuildTriggerBuildOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildOptions {
	DiskSizeGb: *f64,
	DynamicSubstitutions: interface{},
	Env: *[]*string,
	Logging: *string,
	LogStreamingOption: *string,
	MachineType: *string,
	RequestedVerifyOption: *string,
	SecretEnv: *[]*string,
	SourceProvenanceHash: *[]*string,
	SubstitutionOption: *string,
	Volumes: interface{},
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Requested disk size for the VM that runs the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>interface{}</code> | Option to specify whether or not to apply bash style string operations to the substitutions. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env">Env</a></code> | <code>*[]*string</code> | A list of global environment variable definitions that will exist for all build steps in this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging">Logging</a></code> | <code>*string</code> | Option to specify the logging mode, which determines if and where build logs are stored. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption">LogStreamingOption</a></code> | <code>*string</code> | Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType">MachineType</a></code> | <code>*string</code> | Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>*string</code> | Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>*[]*string</code> | Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption">SubstitutionOption</a></code> | <code>*string</code> | Option to specify behavior when there is an error in the substitution checks. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}

---

##### `DynamicSubstitutions`<sup>Optional</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions"></a>

```go
DynamicSubstitutions interface{}
```

- *Type:* interface{}

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging"></a>

```go
Logging *string
```

- *Type:* *string

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logging CloudbuildTrigger#logging}

---

##### `LogStreamingOption`<sup>Optional</sup> <a name="LogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption"></a>

```go
LogStreamingOption *string
```

- *Type:* *string

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}

---

##### `RequestedVerifyOption`<sup>Optional</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption"></a>

```go
RequestedVerifyOption *string
```

- *Type:* *string

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv"></a>

```go
SecretEnv *[]*string
```

- *Type:* *[]*string

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `SourceProvenanceHash`<sup>Optional</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash"></a>

```go
SourceProvenanceHash *[]*string
```

- *Type:* *[]*string

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}

---

##### `SubstitutionOption`<sup>Optional</sup> <a name="SubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption"></a>

```go
SubstitutionOption *string
```

- *Type:* *string

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}

---

### CloudbuildTriggerBuildOptionsVolumes <a name="CloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildOptionsVolumes {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name">Name</a></code> | <code>*string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path">Path</a></code> | <code>*string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerBuildSecret <a name="CloudbuildTriggerBuildSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildSecret {
	KmsKeyName: *string,
	SecretEnv: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Cloud KMS key name to use to decrypt these envs. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv">SecretEnv</a></code> | <code>*map[string]*string</code> | Map of environment variable name to its encrypted value. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Cloud KMS key name to use to decrypt these envs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#kms_key_name CloudbuildTrigger#kms_key_name}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv"></a>

```go
SecretEnv *map[string]*string
```

- *Type:* *map[string]*string

Map of environment variable name to its encrypted value.

Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

### CloudbuildTriggerBuildSource <a name="CloudbuildTriggerBuildSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildSource {
	RepoSource: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource,
	StorageSource: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | storage_source block. |

---

##### `RepoSource`<sup>Optional</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource"></a>

```go
RepoSource CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}

---

##### `StorageSource`<sup>Optional</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource"></a>

```go
StorageSource CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}

---

### CloudbuildTriggerBuildSourceRepoSource <a name="CloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildSourceRepoSource {
	RepoName: *string,
	BranchName: *string,
	CommitSha: *string,
	Dir: *string,
	InvertRegex: interface{},
	ProjectId: *string,
	Substitutions: *map[string]*string,
	TagName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName">RepoName</a></code> | <code>*string</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName">BranchName</a></code> | <code>*string</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha">CommitSha</a></code> | <code>*string</code> | Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project that owns the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions to use in a triggered build. Should only be used with triggers.run. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName">TagName</a></code> | <code>*string</code> | Regex matching tags to build. |

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project that owns the Cloud Source Repository.

If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerBuildSourceStorageSource <a name="CloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildSourceStorageSource {
	Bucket: *string,
	Object: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket">Bucket</a></code> | <code>*string</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object">Object</a></code> | <code>*string</code> | Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation">Generation</a></code> | <code>*string</code> | Google Cloud Storage generation for the object.  If the generation is omitted, the latest generation will be used. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object"></a>

```go
Object *string
```

- *Type:* *string

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#object CloudbuildTrigger#object}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

Google Cloud Storage generation for the object.  If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#generation CloudbuildTrigger#generation}

---

### CloudbuildTriggerBuildStep <a name="CloudbuildTriggerBuildStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildStep {
	Name: *string,
	Args: *[]*string,
	Dir: *string,
	Entrypoint: *string,
	Env: *[]*string,
	Id: *string,
	Script: *string,
	SecretEnv: *[]*string,
	Timeout: *string,
	Timing: *string,
	Volumes: interface{},
	WaitFor: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name">Name</a></code> | <code>*string</code> | The name of the container image that will run this particular build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args">Args</a></code> | <code>*[]*string</code> | A list of arguments that will be presented to the step when it is started. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir">Dir</a></code> | <code>*string</code> | Working directory to use when running this step's container. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint">Entrypoint</a></code> | <code>*string</code> | Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env">Env</a></code> | <code>*[]*string</code> | A list of environment variable definitions to be used when running a step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id">Id</a></code> | <code>*string</code> | Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script">Script</a></code> | <code>*string</code> | A shell script to be executed in the step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout">Timeout</a></code> | <code>*string</code> | Time limit for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing">Timing</a></code> | <code>*string</code> | Output only. Stores timing information for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor">WaitFor</a></code> | <code>*[]*string</code> | The ID(s) of the step(s) that this build step depends on. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#args CloudbuildTrigger#args}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint"></a>

```go
Entrypoint *string
```

- *Type:* *string

Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#entrypoint CloudbuildTrigger#entrypoint}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

A list of environment variable definitions to be used when running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id"></a>

```go
Id *string
```

- *Type:* *string

Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script"></a>

```go
Script *string
```

- *Type:* *string

A shell script to be executed in the step.

When script is provided, the user cannot specify the entrypoint or args.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#script CloudbuildTrigger#script}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv"></a>

```go
SecretEnv *[]*string
```

- *Type:* *[]*string

A list of environment variables which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in
the build's 'Secret'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time limit for executing this build step.

If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

##### `Timing`<sup>Optional</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing"></a>

```go
Timing *string
```

- *Type:* *string

Output only. Stores timing information for executing this build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timing CloudbuildTrigger#timing}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `WaitFor`<sup>Optional</sup> <a name="WaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor"></a>

```go
WaitFor *[]*string
```

- *Type:* *[]*string

The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#wait_for CloudbuildTrigger#wait_for}

---

### CloudbuildTriggerBuildStepVolumes <a name="CloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerBuildStepVolumes {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name">Name</a></code> | <code>*string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path">Path</a></code> | <code>*string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerConfig <a name="CloudbuildTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApprovalConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig,
	BitbucketServerTriggerConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig,
	BuildAttribute: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerBuild,
	Description: *string,
	Disabled: interface{},
	Filename: *string,
	Filter: *string,
	GitFileSource: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerGitFileSource,
	Github: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerGithub,
	Id: *string,
	IgnoredFiles: *[]*string,
	IncludeBuildLogs: *string,
	IncludedFiles: *[]*string,
	Location: *string,
	Name: *string,
	Project: *string,
	PubsubConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig,
	ServiceAccount: *string,
	SourceToBuild: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild,
	Substitutions: *map[string]*string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerTimeouts,
	TriggerTemplate: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate,
	WebhookConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | bitbucket_server_trigger_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename">Filename</a></code> | <code>*string</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter">Filter</a></code> | <code>*string</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles">IgnoredFiles</a></code> | <code>*[]*string</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>*string</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles">IncludedFiles</a></code> | <code>*[]*string</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location">Location</a></code> | <code>*string</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalConfig`<sup>Optional</sup> <a name="ApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig"></a>

```go
ApprovalConfig CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `BitbucketServerTriggerConfig`<sup>Optional</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig"></a>

```go
BitbucketServerTriggerConfig CloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

bitbucket_server_trigger_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bitbucket_server_trigger_config CloudbuildTrigger#bitbucket_server_trigger_config}

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute"></a>

```go
BuildAttribute CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `GitFileSource`<sup>Optional</sup> <a name="GitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource"></a>

```go
GitFileSource CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github"></a>

```go
Github CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredFiles`<sup>Optional</sup> <a name="IgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles"></a>

```go
IgnoredFiles *[]*string
```

- *Type:* *[]*string

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `IncludeBuildLogs`<sup>Optional</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs"></a>

```go
IncludeBuildLogs *string
```

- *Type:* *string

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `IncludedFiles`<sup>Optional</sup> <a name="IncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles"></a>

```go
IncludedFiles *[]*string
```

- *Type:* *[]*string

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `PubsubConfig`<sup>Optional</sup> <a name="PubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig"></a>

```go
PubsubConfig CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `SourceToBuild`<sup>Optional</sup> <a name="SourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild"></a>

```go
SourceToBuild CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions"></a>

```go
Substitutions *map[string]*string
```

- *Type:* *map[string]*string

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts"></a>

```go
Timeouts CloudbuildTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `TriggerTemplate`<sup>Optional</sup> <a name="TriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate"></a>

```go
TriggerTemplate CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `WebhookConfig`<sup>Optional</sup> <a name="WebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig"></a>

```go
WebhookConfig CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

### CloudbuildTriggerGitFileSource <a name="CloudbuildTriggerGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerGitFileSource {
	Path: *string,
	RepoType: *string,
	GithubEnterpriseConfig: *string,
	Revision: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path">Path</a></code> | <code>*string</code> | The path of the file, with the repo root as the root of the path. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType">RepoType</a></code> | <code>*string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL).  Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision">Revision</a></code> | <code>*string</code> | The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the  filename (optional). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri">Uri</a></code> | <code>*string</code> | The URI of the repo (optional). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType"></a>

```go
RepoType *string
```

- *Type:* *string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL).  Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig *string
```

- *Type:* *string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the  filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#revision CloudbuildTrigger#revision}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerGithub <a name="CloudbuildTriggerGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerGithub {
	EnterpriseConfigResourceName: *string,
	Name: *string,
	Owner: *string,
	PullRequest: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest,
	Push: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildTrigger.CloudbuildTriggerGithubPush,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>*string</code> | The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name">Name</a></code> | <code>*string</code> | Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner">Owner</a></code> | <code>*string</code> | Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | push block. |

---

##### `EnterpriseConfigResourceName`<sup>Optional</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName"></a>

```go
EnterpriseConfigResourceName *string
```

- *Type:* *string

The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#enterprise_config_resource_name CloudbuildTrigger#enterprise_config_resource_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#owner CloudbuildTrigger#owner}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest"></a>

```go
PullRequest CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push"></a>

```go
Push CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerGithubPullRequest <a name="CloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerGithubPullRequest {
	Branch: *string,
	CommentControl: *string,
	InvertRegex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl">CommentControl</a></code> | <code>*string</code> | Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl"></a>

```go
CommentControl *string
```

- *Type:* *string

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerGithubPush <a name="CloudbuildTriggerGithubPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerGithubPush {
	Branch: *string,
	InvertRegex: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch">Branch</a></code> | <code>*string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | When true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag">Tag</a></code> | <code>*string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerPubsubConfig <a name="CloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerPubsubConfig {
	Topic: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic">Topic</a></code> | <code>*string</code> | The name of the topic from which this subscription is receiving messages. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account that will make the push request. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#topic CloudbuildTrigger#topic}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account that will make the push request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}

---

### CloudbuildTriggerSourceToBuild <a name="CloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerSourceToBuild {
	Ref: *string,
	RepoType: *string,
	Uri: *string,
	GithubEnterpriseConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref">Ref</a></code> | <code>*string</code> | The branch or tag to use. Must start with "refs/" (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType">RepoType</a></code> | <code>*string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri">Uri</a></code> | <code>*string</code> | The URI of the repo (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ref CloudbuildTrigger#ref}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType"></a>

```go
RepoType *string
```

- *Type:* *string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the repo (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig"></a>

```go
GithubEnterpriseConfig *string
```

- *Type:* *string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

### CloudbuildTriggerTimeouts <a name="CloudbuildTriggerTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}.

---

### CloudbuildTriggerTriggerTemplate <a name="CloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerTriggerTemplate {
	BranchName: *string,
	CommitSha: *string,
	Dir: *string,
	InvertRegex: interface{},
	ProjectId: *string,
	RepoName: *string,
	TagName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName">BranchName</a></code> | <code>*string</code> | Name of the branch to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha">CommitSha</a></code> | <code>*string</code> | Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName">RepoName</a></code> | <code>*string</code> | Name of the Cloud Source Repository. If omitted, the name "default" is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName">TagName</a></code> | <code>*string</code> | Name of the tag to build. |

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerWebhookConfig <a name="CloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

&cloudbuildtrigger.CloudbuildTriggerWebhookConfig {
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret">Secret</a></code> | <code>*string</code> | Resource name for the secret required as a URL parameter. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildTriggerApprovalConfigOutputReference <a name="CloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerApprovalConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerApprovalConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired"></a>

```go
func ResetApprovalRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">ApprovalRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput"></a>

```go
func ApprovalRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```go
func ApprovalRequired() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBitbucketServerTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value CloudbuildTriggerBitbucketServerTriggerConfigPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush"></a>

```go
func PutPush(value CloudbuildTriggerBitbucketServerTriggerConfigPush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush"></a>

```go
func ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput">BitbucketServerConfigResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```go
func PullRequest() CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```go
func Push() CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a>

---

##### `BitbucketServerConfigResourceInput`<sup>Optional</sup> <a name="BitbucketServerConfigResourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput"></a>

```go
func BitbucketServerConfigResourceInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() CloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput"></a>

```go
func PushInput() CloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput"></a>

```go
func RepoSlugInput() *string
```

- *Type:* *string

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```go
func BitbucketServerConfigResource() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```go
func RepoSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBitbucketServerTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl"></a>

```go
func ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput"></a>

```go
func CommentControlInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```go
func CommentControl() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBitbucketServerTriggerConfigPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBitbucketServerTriggerConfigPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### CloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildArtifactsObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildArtifactsObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">Timing</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```go
func Timing() CloudbuildTriggerBuildArtifactsObjectsTimingList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---


### CloudbuildTriggerBuildArtifactsObjectsTimingList <a name="CloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildArtifactsObjectsTimingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildArtifactsObjectsTimingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildArtifactsObjectsTiming
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### CloudbuildTriggerBuildArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects">PutObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects">ResetObjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjects` <a name="PutObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects"></a>

```go
func PutObjects(value CloudbuildTriggerBuildArtifactsObjects)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages"></a>

```go
func ResetImages()
```

##### `ResetObjects` <a name="ResetObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects"></a>

```go
func ResetObjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput">ImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput">ObjectsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images">Images</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```go
func Objects() CloudbuildTriggerBuildArtifactsObjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput"></a>

```go
func ImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectsInput`<sup>Optional</sup> <a name="ObjectsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput"></a>

```go
func ObjectsInput() CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```go
func Images() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---


### CloudbuildTriggerBuildAvailableSecretsOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildAvailableSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildAvailableSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager">PutSecretManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretManager` <a name="PutSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager"></a>

```go
func PutSecretManager(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">SecretManager</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput">SecretManagerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```go
func SecretManager() CloudbuildTriggerBuildAvailableSecretsSecretManagerList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `SecretManagerInput`<sup>Optional</sup> <a name="SecretManagerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput"></a>

```go
func SecretManagerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildAvailableSecretsSecretManagerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildAvailableSecretsSecretManagerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput">EnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">Env</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput"></a>

```go
func EnvInput() *string
```

- *Type:* *string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```go
func Env() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildOptionsOutputReference <a name="CloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions">ResetDynamicSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption">ResetLogStreamingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption">ResetRequestedVerifyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash">ResetSourceProvenanceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption">ResetSubstitutionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDynamicSubstitutions` <a name="ResetDynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions"></a>

```go
func ResetDynamicSubstitutions()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetLogStreamingOption` <a name="ResetLogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption"></a>

```go
func ResetLogStreamingOption()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetRequestedVerifyOption` <a name="ResetRequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption"></a>

```go
func ResetRequestedVerifyOption()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```

##### `ResetSourceProvenanceHash` <a name="ResetSourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash"></a>

```go
func ResetSourceProvenanceHash()
```

##### `ResetSubstitutionOption` <a name="ResetSubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption"></a>

```go
func ResetSubstitutionOption()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput">DynamicSubstitutionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput">LoggingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput">LogStreamingOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput">RequestedVerifyOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput">SourceProvenanceHashInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput">SubstitutionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging">Logging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">LogStreamingOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">SubstitutionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```go
func Volumes() CloudbuildTriggerBuildOptionsVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DynamicSubstitutionsInput`<sup>Optional</sup> <a name="DynamicSubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput"></a>

```go
func DynamicSubstitutionsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput"></a>

```go
func LoggingInput() *string
```

- *Type:* *string

---

##### `LogStreamingOptionInput`<sup>Optional</sup> <a name="LogStreamingOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput"></a>

```go
func LogStreamingOptionInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `RequestedVerifyOptionInput`<sup>Optional</sup> <a name="RequestedVerifyOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput"></a>

```go
func RequestedVerifyOptionInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceProvenanceHashInput`<sup>Optional</sup> <a name="SourceProvenanceHashInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput"></a>

```go
func SourceProvenanceHashInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubstitutionOptionInput`<sup>Optional</sup> <a name="SubstitutionOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput"></a>

```go
func SubstitutionOptionInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DynamicSubstitutions`<sup>Required</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```go
func DynamicSubstitutions() interface{}
```

- *Type:* interface{}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```go
func Logging() *string
```

- *Type:* *string

---

##### `LogStreamingOption`<sup>Required</sup> <a name="LogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```go
func LogStreamingOption() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `RequestedVerifyOption`<sup>Required</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```go
func RequestedVerifyOption() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *[]*string
```

- *Type:* *[]*string

---

##### `SourceProvenanceHash`<sup>Required</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```go
func SourceProvenanceHash() *[]*string
```

- *Type:* *[]*string

---

##### `SubstitutionOption`<sup>Required</sup> <a name="SubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```go
func SubstitutionOption() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---


### CloudbuildTriggerBuildOptionsVolumesList <a name="CloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildOptionsVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildOptionsVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildOptionsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildOptionsVolumesOutputReference <a name="CloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildOptionsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildOptionsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildOutputReference <a name="CloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets">PutAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets">ResetAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket">ResetLogsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl">ResetQueueTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts"></a>

```go
func PutArtifacts(value CloudbuildTriggerBuildArtifacts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `PutAvailableSecrets` <a name="PutAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets"></a>

```go
func PutAvailableSecrets(value CloudbuildTriggerBuildAvailableSecrets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions"></a>

```go
func PutOptions(value CloudbuildTriggerBuildOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource"></a>

```go
func PutSource(value CloudbuildTriggerBuildSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts"></a>

```go
func ResetArtifacts()
```

##### `ResetAvailableSecrets` <a name="ResetAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets"></a>

```go
func ResetAvailableSecrets()
```

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages"></a>

```go
func ResetImages()
```

##### `ResetLogsBucket` <a name="ResetLogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket"></a>

```go
func ResetLogsBucket()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetQueueTtl` <a name="ResetQueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl"></a>

```go
func ResetQueueTtl()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step">Step</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput">AvailableSecretsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput">ImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput">LogsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput">QueueTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images">Images</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket">LogsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl">QueueTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```go
func Artifacts() CloudbuildTriggerBuildArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a>

---

##### `AvailableSecrets`<sup>Required</sup> <a name="AvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```go
func AvailableSecrets() CloudbuildTriggerBuildAvailableSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options"></a>

```go
func Options() CloudbuildTriggerBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret"></a>

```go
func Secret() CloudbuildTriggerBuildSecretList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source"></a>

```go
func Source() CloudbuildTriggerBuildSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a>

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step"></a>

```go
func Step() CloudbuildTriggerBuildStepList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput"></a>

```go
func ArtifactsInput() CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `AvailableSecretsInput`<sup>Optional</sup> <a name="AvailableSecretsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput"></a>

```go
func AvailableSecretsInput() CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput"></a>

```go
func ImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogsBucketInput`<sup>Optional</sup> <a name="LogsBucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput"></a>

```go
func LogsBucketInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput"></a>

```go
func OptionsInput() CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `QueueTtlInput`<sup>Optional</sup> <a name="QueueTtlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput"></a>

```go
func QueueTtlInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput"></a>

```go
func SourceInput() CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images"></a>

```go
func Images() *[]*string
```

- *Type:* *[]*string

---

##### `LogsBucket`<sup>Required</sup> <a name="LogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```go
func LogsBucket() *string
```

- *Type:* *string

---

##### `QueueTtl`<sup>Required</sup> <a name="QueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```go
func QueueTtl() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---


### CloudbuildTriggerBuildSecretList <a name="CloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildSecretOutputReference <a name="CloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildSourceOutputReference <a name="CloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource">PutRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource">PutStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource">ResetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource">ResetStorageSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepoSource` <a name="PutRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource"></a>

```go
func PutRepoSource(value CloudbuildTriggerBuildSourceRepoSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `PutStorageSource` <a name="PutStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource"></a>

```go
func PutStorageSource(value CloudbuildTriggerBuildSourceStorageSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `ResetRepoSource` <a name="ResetRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource"></a>

```go
func ResetRepoSource()
```

##### `ResetStorageSource` <a name="ResetStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource"></a>

```go
func ResetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput">RepoSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput">StorageSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```go
func RepoSource() CloudbuildTriggerBuildSourceRepoSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```go
func StorageSource() CloudbuildTriggerBuildSourceStorageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a>

---

##### `RepoSourceInput`<sup>Optional</sup> <a name="RepoSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput"></a>

```go
func RepoSourceInput() CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `StorageSourceInput`<sup>Optional</sup> <a name="StorageSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput"></a>

```go
func StorageSourceInput() CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---


### CloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="CloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildSourceRepoSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildSourceRepoSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions"></a>

```go
func ResetSubstitutions()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName"></a>

```go
func ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">Substitutions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput"></a>

```go
func SubstitutionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```go
func Substitutions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---


### CloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="CloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildSourceStorageSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerBuildSourceStorageSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---


### CloudbuildTriggerBuildStepList <a name="CloudbuildTriggerBuildStepList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildStepOutputReference <a name="CloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming">ResetTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor">ResetWaitFor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTiming` <a name="ResetTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming"></a>

```go
func ResetTiming()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWaitFor` <a name="ResetWaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor"></a>

```go
func ResetWaitFor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput">TimingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput">WaitForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv">SecretEnv</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing">Timing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor">WaitFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```go
func Volumes() CloudbuildTriggerBuildStepVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput"></a>

```go
func EntrypointInput() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimingInput`<sup>Optional</sup> <a name="TimingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput"></a>

```go
func TimingInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInput`<sup>Optional</sup> <a name="WaitForInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput"></a>

```go
func WaitForInput() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```go
func SecretEnv() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```go
func Timing() *string
```

- *Type:* *string

---

##### `WaitFor`<sup>Required</sup> <a name="WaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```go
func WaitFor() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildStepVolumesList <a name="CloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildStepVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildTriggerBuildStepVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get"></a>

```go
func Get(index *f64) CloudbuildTriggerBuildStepVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerBuildStepVolumesOutputReference <a name="CloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerBuildStepVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildTriggerBuildStepVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerGitFileSourceOutputReference <a name="CloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerGitFileSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerGitFileSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput"></a>

```go
func RepoTypeInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---


### CloudbuildTriggerGithubOutputReference <a name="CloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName">ResetEnterpriseConfigResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value CloudbuildTriggerGithubPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush"></a>

```go
func PutPush(value CloudbuildTriggerGithubPush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `ResetEnterpriseConfigResourceName` <a name="ResetEnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName"></a>

```go
func ResetEnterpriseConfigResourceName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush"></a>

```go
func ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput">EnterpriseConfigResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```go
func PullRequest() CloudbuildTriggerGithubPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push"></a>

```go
func Push() CloudbuildTriggerGithubPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a>

---

##### `EnterpriseConfigResourceNameInput`<sup>Optional</sup> <a name="EnterpriseConfigResourceNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput"></a>

```go
func EnterpriseConfigResourceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput"></a>

```go
func PushInput() CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `EnterpriseConfigResourceName`<sup>Required</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```go
func EnterpriseConfigResourceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---


### CloudbuildTriggerGithubPullRequestOutputReference <a name="CloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerGithubPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerGithubPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl"></a>

```go
func ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput"></a>

```go
func CommentControlInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```go
func CommentControl() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---


### CloudbuildTriggerGithubPushOutputReference <a name="CloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerGithubPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerGithubPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---


### CloudbuildTriggerPubsubConfigOutputReference <a name="CloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerPubsubConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerPubsubConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription">Subscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```go
func Subscription() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---


### CloudbuildTriggerSourceToBuildOutputReference <a name="CloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerSourceToBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerSourceToBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig"></a>

```go
func ResetGithubEnterpriseConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput"></a>

```go
func GithubEnterpriseConfigInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput"></a>

```go
func RepoTypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```go
func GithubEnterpriseConfig() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---


### CloudbuildTriggerTimeoutsOutputReference <a name="CloudbuildTriggerTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildTriggerTriggerTemplateOutputReference <a name="CloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerTriggerTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerTriggerTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName"></a>

```go
func ResetRepoName()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName"></a>

```go
func ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---


### CloudbuildTriggerWebhookConfigOutputReference <a name="CloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildtrigger"

cloudbuildtrigger.NewCloudbuildTriggerWebhookConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildTriggerWebhookConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---



