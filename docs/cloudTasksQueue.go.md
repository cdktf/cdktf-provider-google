# `cloudTasksQueue` Submodule <a name="`cloudTasksQueue` Submodule" id="@cdktf/provider-google.cloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueue <a name="CloudTasksQueue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueue(scope Construct, id *string, config CloudTasksQueueConfig) CloudTasksQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig">CloudTasksQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig">CloudTasksQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride">PutAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig">PutStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride">ResetAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig">ResetStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppEngineRoutingOverride` <a name="PutAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride"></a>

```go
func PutAppEngineRoutingOverride(value CloudTasksQueueAppEngineRoutingOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget"></a>

```go
func PutHttpTarget(value CloudTasksQueueHttpTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits"></a>

```go
func PutRateLimits(value CloudTasksQueueRateLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig"></a>

```go
func PutRetryConfig(value CloudTasksQueueRetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `PutStackdriverLoggingConfig` <a name="PutStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig"></a>

```go
func PutStackdriverLoggingConfig(value CloudTasksQueueStackdriverLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts"></a>

```go
func PutTimeouts(value CloudTasksQueueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

---

##### `ResetAppEngineRoutingOverride` <a name="ResetAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride"></a>

```go
func ResetAppEngineRoutingOverride()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget"></a>

```go
func ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig"></a>

```go
func ResetRetryConfig()
```

##### `ResetStackdriverLoggingConfig` <a name="ResetStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig"></a>

```go
func ResetStackdriverLoggingConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.CloudTasksQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.CloudTasksQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.CloudTasksQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.CloudTasksQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudTasksQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride">AppEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig">StackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput">AppEngineRoutingOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput">RateLimitsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput">RetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput">StackdriverLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppEngineRoutingOverride`<sup>Required</sup> <a name="AppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride"></a>

```go
func AppEngineRoutingOverride() CloudTasksQueueAppEngineRoutingOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget"></a>

```go
func HttpTarget() CloudTasksQueueHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits"></a>

```go
func RateLimits() CloudTasksQueueRateLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a>

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig"></a>

```go
func RetryConfig() CloudTasksQueueRetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a>

---

##### `StackdriverLoggingConfig`<sup>Required</sup> <a name="StackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig"></a>

```go
func StackdriverLoggingConfig() CloudTasksQueueStackdriverLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts"></a>

```go
func Timeouts() CloudTasksQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a>

---

##### `AppEngineRoutingOverrideInput`<sup>Optional</sup> <a name="AppEngineRoutingOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```go
func AppEngineRoutingOverrideInput() CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput"></a>

```go
func HttpTargetInput() CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput"></a>

```go
func RateLimitsInput() CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput"></a>

```go
func RetryConfigInput() CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `StackdriverLoggingConfigInput`<sup>Optional</sup> <a name="StackdriverLoggingConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```go
func StackdriverLoggingConfigInput() CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudTasksQueueAppEngineRoutingOverride <a name="CloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueAppEngineRoutingOverride {
	Instance: *string,
	Service: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance">Instance</a></code> | <code>*string</code> | App instance. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service">Service</a></code> | <code>*string</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version">Version</a></code> | <code>*string</code> | App version. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```go
Service *string
```

- *Type:* *string

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```go
Version *string
```

- *Type:* *string

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

### CloudTasksQueueConfig <a name="CloudTasksQueueConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	AppEngineRoutingOverride: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride,
	HttpTarget: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTarget,
	Id: *string,
	Name: *string,
	Project: *string,
	RateLimits: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueRateLimits,
	RetryConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueRetryConfig,
	StackdriverLoggingConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location">Location</a></code> | <code>*string</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride">AppEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name">Name</a></code> | <code>*string</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig">StackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `AppEngineRoutingOverride`<sup>Optional</sup> <a name="AppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```go
AppEngineRoutingOverride CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget"></a>

```go
HttpTarget CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits"></a>

```go
RateLimits CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig"></a>

```go
RetryConfig CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `StackdriverLoggingConfig`<sup>Optional</sup> <a name="StackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```go
StackdriverLoggingConfig CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts"></a>

```go
Timeouts CloudTasksQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

### CloudTasksQueueHttpTarget <a name="CloudTasksQueueHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTarget {
	HeaderOverrides: interface{},
	HttpMethod: *string,
	OauthToken: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken,
	OidcToken: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken,
	UriOverride: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides">HeaderOverrides</a></code> | <code>interface{}</code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride">UriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `HeaderOverrides`<sup>Optional</sup> <a name="HeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides"></a>

```go
HeaderOverrides interface{}
```

- *Type:* interface{}

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken"></a>

```go
OauthToken CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken"></a>

```go
OidcToken CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}

---

##### `UriOverride`<sup>Optional</sup> <a name="UriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride"></a>

```go
UriOverride CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}

---

### CloudTasksQueueHttpTargetHeaderOverrides <a name="CloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetHeaderOverrides {
	Header: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header">Header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```go
Header CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#header CloudTasksQueue#header}

---

### CloudTasksQueueHttpTargetHeaderOverridesHeader <a name="CloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetHeaderOverridesHeader {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">Key</a></code> | <code>*string</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">Value</a></code> | <code>*string</code> | The Value of the header. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```go
Key *string
```

- *Type:* *string

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}

---

### CloudTasksQueueHttpTargetOauthToken <a name="CloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetOauthToken {
	ServiceAccountEmail: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope">Scope</a></code> | <code>*string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}

---

### CloudTasksQueueHttpTargetOidcToken <a name="CloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetOidcToken {
	ServiceAccountEmail: *string,
	Audience: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}

---

### CloudTasksQueueHttpTargetUriOverride <a name="CloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetUriOverride {
	Host: *string,
	PathOverride: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride,
	Port: *string,
	QueryOverride: github.com/cdktf/cdktf-provider-google-go/google/v16.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride,
	Scheme: *string,
	UriOverrideEnforceMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host">Host</a></code> | <code>*string</code> | Host override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride">PathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port">Port</a></code> | <code>*string</code> | Port override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride">QueryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme">Scheme</a></code> | <code>*string</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">UriOverrideEnforceMode</a></code> | <code>*string</code> | URI Override Enforce Mode. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}

---

##### `PathOverride`<sup>Optional</sup> <a name="PathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```go
PathOverride CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port"></a>

```go
Port *string
```

- *Type:* *string

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}

---

##### `QueryOverride`<sup>Optional</sup> <a name="QueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```go
QueryOverride CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}

---

##### `UriOverrideEnforceMode`<sup>Optional</sup> <a name="UriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```go
UriOverrideEnforceMode *string
```

- *Type:* *string

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}

---

### CloudTasksQueueHttpTargetUriOverridePathOverride <a name="CloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetUriOverridePathOverride {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path">Path</a></code> | <code>*string</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```go
Path *string
```

- *Type:* *string

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}

---

### CloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride {
	QueryParams: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">QueryParams</a></code> | <code>*string</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```go
QueryParams *string
```

- *Type:* *string

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}

---

### CloudTasksQueueRateLimits <a name="CloudTasksQueueRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueRateLimits {
	MaxConcurrentDispatches: *f64,
	MaxDispatchesPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches">MaxConcurrentDispatches</a></code> | <code>*f64</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond">MaxDispatchesPerSecond</a></code> | <code>*f64</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `MaxConcurrentDispatches`<sup>Optional</sup> <a name="MaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```go
MaxConcurrentDispatches *f64
```

- *Type:* *f64

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

##### `MaxDispatchesPerSecond`<sup>Optional</sup> <a name="MaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```go
MaxDispatchesPerSecond *f64
```

- *Type:* *f64

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

---

### CloudTasksQueueRetryConfig <a name="CloudTasksQueueRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueRetryConfig {
	MaxAttempts: *f64,
	MaxBackoff: *string,
	MaxDoublings: *f64,
	MaxRetryDuration: *string,
	MinBackoff: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff">MaxBackoff</a></code> | <code>*string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff">MinBackoff</a></code> | <code>*string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts"></a>

```go
MaxAttempts *f64
```

- *Type:* *f64

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

##### `MaxBackoff`<sup>Optional</sup> <a name="MaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff"></a>

```go
MaxBackoff *string
```

- *Type:* *string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

##### `MaxDoublings`<sup>Optional</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings"></a>

```go
MaxDoublings *f64
```

- *Type:* *f64

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

##### `MaxRetryDuration`<sup>Optional</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```go
MaxRetryDuration *string
```

- *Type:* *string

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

##### `MinBackoff`<sup>Optional</sup> <a name="MinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff"></a>

```go
MinBackoff *string
```

- *Type:* *string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

---

### CloudTasksQueueStackdriverLoggingConfig <a name="CloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueStackdriverLoggingConfig {
	SamplingRatio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">SamplingRatio</a></code> | <code>*f64</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `SamplingRatio`<sup>Required</sup> <a name="SamplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```go
SamplingRatio *f64
```

- *Type:* *f64

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

---

### CloudTasksQueueTimeouts <a name="CloudTasksQueueTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

&cloudtasksqueue.CloudTasksQueueTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="CloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueAppEngineRoutingOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueAppEngineRoutingOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesList <a name="CloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetHeaderOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudTasksQueueHttpTargetHeaderOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```go
func Get(index *f64) CloudTasksQueueHttpTargetHeaderOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetHeaderOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudTasksQueueHttpTargetHeaderOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">PutHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```go
func PutHeader(value CloudTasksQueueHttpTargetHeaderOverridesHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">HeaderInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```go
func Header() CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```go
func HeaderInput() CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudTasksQueueHttpTargetOauthTokenOutputReference <a name="CloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetOauthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetOauthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---


### CloudTasksQueueHttpTargetOidcTokenOutputReference <a name="CloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetOidcTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetOidcTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```go
func ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---


### CloudTasksQueueHttpTargetOutputReference <a name="CloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">PutHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride">PutUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">ResetHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride">ResetUriOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderOverrides` <a name="PutHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```go
func PutHeaderOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```go
func PutOauthToken(value CloudTasksQueueHttpTargetOauthToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```go
func PutOidcToken(value CloudTasksQueueHttpTargetOidcToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `PutUriOverride` <a name="PutUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```go
func PutUriOverride(value CloudTasksQueueHttpTargetUriOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `ResetHeaderOverrides` <a name="ResetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```go
func ResetHeaderOverrides()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```go
func ResetOauthToken()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetUriOverride` <a name="ResetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```go
func ResetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides">HeaderOverrides</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride">UriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">HeaderOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">UriOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderOverrides`<sup>Required</sup> <a name="HeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```go
func HeaderOverrides() CloudTasksQueueHttpTargetHeaderOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```go
func OauthToken() CloudTasksQueueHttpTargetOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```go
func OidcToken() CloudTasksQueueHttpTargetOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `UriOverride`<sup>Required</sup> <a name="UriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```go
func UriOverride() CloudTasksQueueHttpTargetUriOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `HeaderOverridesInput`<sup>Optional</sup> <a name="HeaderOverridesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```go
func HeaderOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```go
func OidcTokenInput() CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `UriOverrideInput`<sup>Optional</sup> <a name="UriOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```go
func UriOverrideInput() CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---


### CloudTasksQueueHttpTargetUriOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetUriOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetUriOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">PutPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">PutQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">ResetPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">ResetQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">ResetUriOverrideEnforceMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPathOverride` <a name="PutPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```go
func PutPathOverride(value CloudTasksQueueHttpTargetUriOverridePathOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `PutQueryOverride` <a name="PutQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```go
func PutQueryOverride(value CloudTasksQueueHttpTargetUriOverrideQueryOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPathOverride` <a name="ResetPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```go
func ResetPathOverride()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetQueryOverride` <a name="ResetQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```go
func ResetQueryOverride()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetUriOverrideEnforceMode` <a name="ResetUriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```go
func ResetUriOverrideEnforceMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">PathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">QueryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">PathOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">QueryOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">UriOverrideEnforceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">UriOverrideEnforceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathOverride`<sup>Required</sup> <a name="PathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```go
func PathOverride() CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `QueryOverride`<sup>Required</sup> <a name="QueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```go
func QueryOverride() CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathOverrideInput`<sup>Optional</sup> <a name="PathOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```go
func PathOverrideInput() CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `QueryOverrideInput`<sup>Optional</sup> <a name="QueryOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```go
func QueryOverrideInput() CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `UriOverrideEnforceModeInput`<sup>Optional</sup> <a name="UriOverrideEnforceModeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```go
func UriOverrideEnforceModeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `UriOverrideEnforceMode`<sup>Required</sup> <a name="UriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```go
func UriOverrideEnforceMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---


### CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```go
func ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">QueryParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```go
func QueryParamsInput() *string
```

- *Type:* *string

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```go
func QueryParams() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---


### CloudTasksQueueRateLimitsOutputReference <a name="CloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">ResetMaxConcurrentDispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">ResetMaxDispatchesPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentDispatches` <a name="ResetMaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```go
func ResetMaxConcurrentDispatches()
```

##### `ResetMaxDispatchesPerSecond` <a name="ResetMaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```go
func ResetMaxDispatchesPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">MaxBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">MaxConcurrentDispatchesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">MaxDispatchesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">MaxConcurrentDispatches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">MaxDispatchesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBurstSize`<sup>Required</sup> <a name="MaxBurstSize" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```go
func MaxBurstSize() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDispatchesInput`<sup>Optional</sup> <a name="MaxConcurrentDispatchesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```go
func MaxConcurrentDispatchesInput() *f64
```

- *Type:* *f64

---

##### `MaxDispatchesPerSecondInput`<sup>Optional</sup> <a name="MaxDispatchesPerSecondInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```go
func MaxDispatchesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDispatches`<sup>Required</sup> <a name="MaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```go
func MaxConcurrentDispatches() *f64
```

- *Type:* *f64

---

##### `MaxDispatchesPerSecond`<sup>Required</sup> <a name="MaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```go
func MaxDispatchesPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---


### CloudTasksQueueRetryConfigOutputReference <a name="CloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">ResetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">ResetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">ResetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff">ResetMinBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```go
func ResetMaxAttempts()
```

##### `ResetMaxBackoff` <a name="ResetMaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```go
func ResetMaxBackoff()
```

##### `ResetMaxDoublings` <a name="ResetMaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```go
func ResetMaxDoublings()
```

##### `ResetMaxRetryDuration` <a name="ResetMaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```go
func ResetMaxRetryDuration()
```

##### `ResetMinBackoff` <a name="ResetMinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```go
func ResetMinBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">MaxBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">MaxDoublingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">MaxRetryDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">MinBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff">MaxBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff">MinBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```go
func MaxAttemptsInput() *f64
```

- *Type:* *f64

---

##### `MaxBackoffInput`<sup>Optional</sup> <a name="MaxBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```go
func MaxBackoffInput() *string
```

- *Type:* *string

---

##### `MaxDoublingsInput`<sup>Optional</sup> <a name="MaxDoublingsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```go
func MaxDoublingsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryDurationInput`<sup>Optional</sup> <a name="MaxRetryDurationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```go
func MaxRetryDurationInput() *string
```

- *Type:* *string

---

##### `MinBackoffInput`<sup>Optional</sup> <a name="MinBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```go
func MinBackoffInput() *string
```

- *Type:* *string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```go
func MaxAttempts() *f64
```

- *Type:* *f64

---

##### `MaxBackoff`<sup>Required</sup> <a name="MaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```go
func MaxBackoff() *string
```

- *Type:* *string

---

##### `MaxDoublings`<sup>Required</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```go
func MaxDoublings() *f64
```

- *Type:* *f64

---

##### `MaxRetryDuration`<sup>Required</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```go
func MaxRetryDuration() *string
```

- *Type:* *string

---

##### `MinBackoff`<sup>Required</sup> <a name="MinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```go
func MinBackoff() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---


### CloudTasksQueueStackdriverLoggingConfigOutputReference <a name="CloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueStackdriverLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueStackdriverLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">SamplingRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">SamplingRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SamplingRatioInput`<sup>Optional</sup> <a name="SamplingRatioInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```go
func SamplingRatioInput() *f64
```

- *Type:* *f64

---

##### `SamplingRatio`<sup>Required</sup> <a name="SamplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```go
func SamplingRatio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---


### CloudTasksQueueTimeoutsOutputReference <a name="CloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/cloudtasksqueue"

cloudtasksqueue.NewCloudTasksQueueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudTasksQueueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



