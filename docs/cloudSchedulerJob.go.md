# `cloudSchedulerJob` Submodule <a name="`cloudSchedulerJob` Submodule" id="@cdktf/provider-google.cloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSchedulerJob <a name="CloudSchedulerJob" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJob(scope Construct, id *string, config CloudSchedulerJobConfig) CloudSchedulerJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig">CloudSchedulerJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig">CloudSchedulerJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget">PutAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget">PutPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget">ResetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline">ResetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget">ResetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAppEngineHttpTarget` <a name="PutAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget"></a>

```go
func PutAppEngineHttpTarget(value CloudSchedulerJobAppEngineHttpTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget"></a>

```go
func PutHttpTarget(value CloudSchedulerJobHttpTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `PutPubsubTarget` <a name="PutPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget"></a>

```go
func PutPubsubTarget(value CloudSchedulerJobPubsubTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig"></a>

```go
func PutRetryConfig(value CloudSchedulerJobRetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts"></a>

```go
func PutTimeouts(value CloudSchedulerJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---

##### `ResetAppEngineHttpTarget` <a name="ResetAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget"></a>

```go
func ResetAppEngineHttpTarget()
```

##### `ResetAttemptDeadline` <a name="ResetAttemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline"></a>

```go
func ResetAttemptDeadline()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget"></a>

```go
func ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId"></a>

```go
func ResetId()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubTarget` <a name="ResetPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget"></a>

```go
func ResetPubsubTarget()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig"></a>

```go
func ResetRetryConfig()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.CloudSchedulerJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.CloudSchedulerJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.CloudSchedulerJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput">AppEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput">AttemptDeadlineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput">PubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput">RetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline">AttemptDeadline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppEngineHttpTarget`<sup>Required</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget"></a>

```go
func AppEngineHttpTarget() CloudSchedulerJobAppEngineHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget"></a>

```go
func HttpTarget() CloudSchedulerJobHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a>

---

##### `PubsubTarget`<sup>Required</sup> <a name="PubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget"></a>

```go
func PubsubTarget() CloudSchedulerJobPubsubTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig"></a>

```go
func RetryConfig() CloudSchedulerJobRetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts"></a>

```go
func Timeouts() CloudSchedulerJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a>

---

##### `AppEngineHttpTargetInput`<sup>Optional</sup> <a name="AppEngineHttpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```go
func AppEngineHttpTargetInput() CloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `AttemptDeadlineInput`<sup>Optional</sup> <a name="AttemptDeadlineInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput"></a>

```go
func AttemptDeadlineInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput"></a>

```go
func HttpTargetInput() CloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubTargetInput`<sup>Optional</sup> <a name="PubsubTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput"></a>

```go
func PubsubTargetInput() CloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput"></a>

```go
func RetryConfigInput() CloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `AttemptDeadline`<sup>Required</sup> <a name="AttemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline"></a>

```go
func AttemptDeadline() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSchedulerJobAppEngineHttpTarget <a name="CloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobAppEngineHttpTarget {
	RelativeUri: *string,
	AppEngineRouting: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting,
	Body: *string,
	Headers: *map[string]*string,
	HttpMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri">RelativeUri</a></code> | <code>*string</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body">Body</a></code> | <code>*string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers">Headers</a></code> | <code>*map[string]*string</code> | HTTP request headers. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Which HTTP method to use for the request. |

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```go
RelativeUri *string
```

- *Type:* *string

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#relative_uri CloudSchedulerJob#relative_uri}

---

##### `AppEngineRouting`<sup>Optional</sup> <a name="AppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```go
AppEngineRouting CloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#app_engine_routing CloudSchedulerJob#app_engine_routing}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```go
Body *string
```

- *Type:* *string

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

HTTP request headers.

This map contains the header field names and values.
Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

### CloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
	Instance: *string,
	Service: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">Instance</a></code> | <code>*string</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">Service</a></code> | <code>*string</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">Version</a></code> | <code>*string</code> | App version. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#instance CloudSchedulerJob#instance}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```go
Service *string
```

- *Type:* *string

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service CloudSchedulerJob#service}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```go
Version *string
```

- *Type:* *string

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#version CloudSchedulerJob#version}

---

### CloudSchedulerJobConfig <a name="CloudSchedulerJobConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppEngineHttpTarget: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget,
	AttemptDeadline: *string,
	Description: *string,
	HttpTarget: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobHttpTarget,
	Id: *string,
	Paused: interface{},
	Project: *string,
	PubsubTarget: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget,
	Region: *string,
	RetryConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobRetryConfig,
	Schedule: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name">Name</a></code> | <code>*string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline">AttemptDeadline</a></code> | <code>*string</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the job.  This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#id CloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#project CloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region">Region</a></code> | <code>*string</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#name CloudSchedulerJob#name}

---

##### `AppEngineHttpTarget`<sup>Optional</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```go
AppEngineHttpTarget CloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#app_engine_http_target CloudSchedulerJob#app_engine_http_target}

---

##### `AttemptDeadline`<sup>Optional</sup> <a name="AttemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline"></a>

```go
AttemptDeadline *string
```

- *Type:* *string

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
For HTTP targets, between 15 seconds and 30 minutes.
For App Engine HTTP targets, between 15 seconds and 24 hours.
**Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#attempt_deadline CloudSchedulerJob#attempt_deadline}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the job.  This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#description CloudSchedulerJob#description}

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget"></a>

```go
HttpTarget CloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_target CloudSchedulerJob#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#id CloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#paused CloudSchedulerJob#paused}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#project CloudSchedulerJob#project}.

---

##### `PubsubTarget`<sup>Optional</sup> <a name="PubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget"></a>

```go
PubsubTarget CloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#pubsub_target CloudSchedulerJob#pubsub_target}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#region CloudSchedulerJob#region}

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig"></a>

```go
RetryConfig CloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#retry_config CloudSchedulerJob#retry_config}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#schedule CloudSchedulerJob#schedule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts"></a>

```go
Timeouts CloudSchedulerJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#timeouts CloudSchedulerJob#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#time_zone CloudSchedulerJob#time_zone}

---

### CloudSchedulerJobHttpTarget <a name="CloudSchedulerJobHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobHttpTarget {
	Uri: *string,
	Body: *string,
	Headers: *map[string]*string,
	HttpMethod: *string,
	OauthToken: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken,
	OidcToken: github.com/cdktf/cdktf-provider-google-go/google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri">Uri</a></code> | <code>*string</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body">Body</a></code> | <code>*string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers">Headers</a></code> | <code>*map[string]*string</code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#uri CloudSchedulerJob#uri}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body"></a>

```go
Body *string
```

- *Type:* *string

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken"></a>

```go
OauthToken CloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#oauth_token CloudSchedulerJob#oauth_token}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken"></a>

```go
OidcToken CloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#oidc_token CloudSchedulerJob#oidc_token}

---

### CloudSchedulerJobHttpTargetOauthToken <a name="CloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobHttpTargetOauthToken {
	ServiceAccountEmail: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope">Scope</a></code> | <code>*string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#scope CloudSchedulerJob#scope}

---

### CloudSchedulerJobHttpTargetOidcToken <a name="CloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobHttpTargetOidcToken {
	ServiceAccountEmail: *string,
	Audience: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#audience CloudSchedulerJob#audience}

---

### CloudSchedulerJobPubsubTarget <a name="CloudSchedulerJobPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobPubsubTarget {
	TopicName: *string,
	Attributes: *map[string]*string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName">TopicName</a></code> | <code>*string</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data">Data</a></code> | <code>*string</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName"></a>

```go
TopicName *string
```

- *Type:* *string

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#topic_name CloudSchedulerJob#topic_name}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes"></a>

```go
Attributes *map[string]*string
```

- *Type:* *map[string]*string

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#attributes CloudSchedulerJob#attributes}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data"></a>

```go
Data *string
```

- *Type:* *string

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#data CloudSchedulerJob#data}

---

### CloudSchedulerJobRetryConfig <a name="CloudSchedulerJobRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobRetryConfig {
	MaxBackoffDuration: *string,
	MaxDoublings: *f64,
	MaxRetryDuration: *string,
	MinBackoffDuration: *string,
	RetryCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>*string</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>*string</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount">RetryCount</a></code> | <code>*f64</code> | The number of attempts that the system will make to run a  job using the exponential backoff procedure described by maxDoublings. |

---

##### `MaxBackoffDuration`<sup>Optional</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```go
MaxBackoffDuration *string
```

- *Type:* *string

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_backoff_duration CloudSchedulerJob#max_backoff_duration}

---

##### `MaxDoublings`<sup>Optional</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```go
MaxDoublings *f64
```

- *Type:* *f64

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_doublings CloudSchedulerJob#max_doublings}

---

##### `MaxRetryDuration`<sup>Optional</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```go
MaxRetryDuration *string
```

- *Type:* *string

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_retry_duration CloudSchedulerJob#max_retry_duration}

---

##### `MinBackoffDuration`<sup>Optional</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```go
MinBackoffDuration *string
```

- *Type:* *string

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#min_backoff_duration CloudSchedulerJob#min_backoff_duration}

---

##### `RetryCount`<sup>Optional</sup> <a name="RetryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount"></a>

```go
RetryCount *f64
```

- *Type:* *f64

The number of attempts that the system will make to run a  job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#retry_count CloudSchedulerJob#retry_count}

---

### CloudSchedulerJobTimeouts <a name="CloudSchedulerJobTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

&cloudschedulerjob.CloudSchedulerJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#create CloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#delete CloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#update CloudSchedulerJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#create CloudSchedulerJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#delete CloudSchedulerJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#update CloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### CloudSchedulerJobAppEngineHttpTargetOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobAppEngineHttpTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobAppEngineHttpTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">PutAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">ResetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppEngineRouting` <a name="PutAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```go
func PutAppEngineRouting(value CloudSchedulerJobAppEngineHttpTargetAppEngineRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `ResetAppEngineRouting` <a name="ResetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```go
func ResetAppEngineRouting()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">AppEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">RelativeUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">RelativeUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppEngineRouting`<sup>Required</sup> <a name="AppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```go
func AppEngineRouting() CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `AppEngineRoutingInput`<sup>Optional</sup> <a name="AppEngineRoutingInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```go
func AppEngineRoutingInput() CloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `RelativeUriInput`<sup>Optional</sup> <a name="RelativeUriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```go
func RelativeUriInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```go
func RelativeUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---


### CloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="CloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobHttpTargetOauthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobHttpTargetOauthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---


### CloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="CloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobHttpTargetOidcTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobHttpTargetOidcTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```go
func ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---


### CloudSchedulerJobHttpTargetOutputReference <a name="CloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobHttpTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobHttpTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```go
func PutOauthToken(value CloudSchedulerJobHttpTargetOauthToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```go
func PutOidcToken(value CloudSchedulerJobHttpTargetOidcToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```go
func ResetOauthToken()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```go
func ResetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```go
func OauthToken() CloudSchedulerJobHttpTargetOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```go
func OidcToken() CloudSchedulerJobHttpTargetOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() CloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```go
func OidcTokenInput() CloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---


### CloudSchedulerJobPubsubTargetOutputReference <a name="CloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobPubsubTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobPubsubTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">TopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName">TopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```go
func TopicNameInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```go
func Attributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```go
func TopicName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---


### CloudSchedulerJobRetryConfigOutputReference <a name="CloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">ResetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">ResetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">ResetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">ResetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount">ResetRetryCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackoffDuration` <a name="ResetMaxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```go
func ResetMaxBackoffDuration()
```

##### `ResetMaxDoublings` <a name="ResetMaxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```go
func ResetMaxDoublings()
```

##### `ResetMaxRetryDuration` <a name="ResetMaxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```go
func ResetMaxRetryDuration()
```

##### `ResetMinBackoffDuration` <a name="ResetMinBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```go
func ResetMinBackoffDuration()
```

##### `ResetRetryCount` <a name="ResetRetryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```go
func ResetRetryCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">MaxBackoffDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">MaxDoublingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">MaxRetryDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">MinBackoffDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">RetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount">RetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBackoffDurationInput`<sup>Optional</sup> <a name="MaxBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```go
func MaxBackoffDurationInput() *string
```

- *Type:* *string

---

##### `MaxDoublingsInput`<sup>Optional</sup> <a name="MaxDoublingsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```go
func MaxDoublingsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryDurationInput`<sup>Optional</sup> <a name="MaxRetryDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```go
func MaxRetryDurationInput() *string
```

- *Type:* *string

---

##### `MinBackoffDurationInput`<sup>Optional</sup> <a name="MinBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```go
func MinBackoffDurationInput() *string
```

- *Type:* *string

---

##### `RetryCountInput`<sup>Optional</sup> <a name="RetryCountInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```go
func RetryCountInput() *f64
```

- *Type:* *f64

---

##### `MaxBackoffDuration`<sup>Required</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```go
func MaxBackoffDuration() *string
```

- *Type:* *string

---

##### `MaxDoublings`<sup>Required</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```go
func MaxDoublings() *f64
```

- *Type:* *f64

---

##### `MaxRetryDuration`<sup>Required</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```go
func MaxRetryDuration() *string
```

- *Type:* *string

---

##### `MinBackoffDuration`<sup>Required</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```go
func MinBackoffDuration() *string
```

- *Type:* *string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```go
func RetryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---


### CloudSchedulerJobTimeoutsOutputReference <a name="CloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudschedulerjob"

cloudschedulerjob.NewCloudSchedulerJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSchedulerJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



