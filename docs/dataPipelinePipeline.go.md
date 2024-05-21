# `dataPipelinePipeline` Submodule <a name="`dataPipelinePipeline` Submodule" id="@cdktf/provider-google.dataPipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPipelinePipeline <a name="DataPipelinePipeline" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline google_data_pipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipeline(scope Construct, id *string, config DataPipelinePipelineConfig) DataPipelinePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo">PutScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload">PutWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources">ResetPipelineSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo">ResetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail">ResetSchedulerServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload">ResetWorkload</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleInfo` <a name="PutScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo"></a>

```go
func PutScheduleInfo(value DataPipelinePipelineScheduleInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts"></a>

```go
func PutTimeouts(value DataPipelinePipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

---

##### `PutWorkload` <a name="PutWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload"></a>

```go
func PutWorkload(value DataPipelinePipelineWorkload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetPipelineSources` <a name="ResetPipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources"></a>

```go
func ResetPipelineSources()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScheduleInfo` <a name="ResetScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo"></a>

```go
func ResetScheduleInfo()
```

##### `ResetSchedulerServiceAccountEmail` <a name="ResetSchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail"></a>

```go
func ResetSchedulerServiceAccountEmail()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkload` <a name="ResetWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload"></a>

```go
func ResetWorkload()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.DataPipelinePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.DataPipelinePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.DataPipelinePipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.DataPipelinePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount">JobCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput">PipelineSourcesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput">ScheduleInfoInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput">SchedulerServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput">WorkloadInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources">PipelineSources</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobCount`<sup>Required</sup> <a name="JobCount" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount"></a>

```go
func JobCount() *f64
```

- *Type:* *f64

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `ScheduleInfo`<sup>Required</sup> <a name="ScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo"></a>

```go
func ScheduleInfo() DataPipelinePipelineScheduleInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts"></a>

```go
func Timeouts() DataPipelinePipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a>

---

##### `Workload`<sup>Required</sup> <a name="Workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload"></a>

```go
func Workload() DataPipelinePipelineWorkloadOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PipelineSourcesInput`<sup>Optional</sup> <a name="PipelineSourcesInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput"></a>

```go
func PipelineSourcesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScheduleInfoInput`<sup>Optional</sup> <a name="ScheduleInfoInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput"></a>

```go
func ScheduleInfoInput() DataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `SchedulerServiceAccountEmailInput`<sup>Optional</sup> <a name="SchedulerServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput"></a>

```go
func SchedulerServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkloadInput`<sup>Optional</sup> <a name="WorkloadInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput"></a>

```go
func WorkloadInput() DataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PipelineSources`<sup>Required</sup> <a name="PipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources"></a>

```go
func PipelineSources() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SchedulerServiceAccountEmail`<sup>Required</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail"></a>

```go
func SchedulerServiceAccountEmail() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPipelinePipelineConfig <a name="DataPipelinePipelineConfig" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	State: *string,
	Type: *string,
	DisplayName: *string,
	Id: *string,
	PipelineSources: *map[string]*string,
	Project: *string,
	Region: *string,
	ScheduleInfo: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineScheduleInfo,
	SchedulerServiceAccountEmail: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineTimeouts,
	Workload: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name">Name</a></code> | <code>*string</code> | "The pipeline name. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state">State</a></code> | <code>*string</code> | The state of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type">Type</a></code> | <code>*string</code> | The type of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources">PipelineSources</a></code> | <code>*map[string]*string</code> | The sources of the pipeline (for example, Dataplex). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | workload block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

"The pipeline name.

For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#name DataPipelinePipeline#name}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the pipeline.

When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#state DataPipelinePipeline#state}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the pipeline.

This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#type DataPipelinePipeline#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#display_name DataPipelinePipeline#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PipelineSources`<sup>Optional</sup> <a name="PipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources"></a>

```go
PipelineSources *map[string]*string
```

- *Type:* *map[string]*string

The sources of the pipeline (for example, Dataplex).

The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#pipeline_sources DataPipelinePipeline#pipeline_sources}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#region DataPipelinePipeline#region}

---

##### `ScheduleInfo`<sup>Optional</sup> <a name="ScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo"></a>

```go
ScheduleInfo DataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#schedule_info DataPipelinePipeline#schedule_info}

---

##### `SchedulerServiceAccountEmail`<sup>Optional</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail"></a>

```go
SchedulerServiceAccountEmail *string
```

- *Type:* *string

Optional.

A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#scheduler_service_account_email DataPipelinePipeline#scheduler_service_account_email}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts"></a>

```go
Timeouts DataPipelinePipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#timeouts DataPipelinePipeline#timeouts}

---

##### `Workload`<sup>Optional</sup> <a name="Workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload"></a>

```go
Workload DataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

workload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#workload DataPipelinePipeline#workload}

---

### DataPipelinePipelineScheduleInfo <a name="DataPipelinePipelineScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineScheduleInfo {
	Schedule: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule">Schedule</a></code> | <code>*string</code> | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone">TimeZone</a></code> | <code>*string</code> | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#schedule DataPipelinePipeline#schedule}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#time_zone DataPipelinePipeline#time_zone}

---

### DataPipelinePipelineTimeouts <a name="DataPipelinePipelineTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}.

---

### DataPipelinePipelineWorkload <a name="DataPipelinePipelineWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkload {
	DataflowFlexTemplateRequest: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest,
	DataflowLaunchTemplateRequest: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | dataflow_flex_template_request block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | dataflow_launch_template_request block. |

---

##### `DataflowFlexTemplateRequest`<sup>Optional</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest"></a>

```go
DataflowFlexTemplateRequest DataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

dataflow_flex_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#dataflow_flex_template_request DataPipelinePipeline#dataflow_flex_template_request}

---

##### `DataflowLaunchTemplateRequest`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest"></a>

```go
DataflowLaunchTemplateRequest DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

dataflow_launch_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#dataflow_launch_template_request DataPipelinePipeline#dataflow_launch_template_request}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest {
	LaunchParameter: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter,
	Location: *string,
	ProjectId: *string,
	ValidateOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | launch_parameter block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location">Location</a></code> | <code>*string</code> | The regional endpoint to which to direct the request. For example, us-central1, us-west1. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | If true, the request is validated but not actually executed. Defaults to false. |

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter"></a>

```go
LaunchParameter DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

launch_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#launch_parameter DataPipelinePipeline#launch_parameter}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location"></a>

```go
Location *string
```

- *Type:* *string

The regional endpoint to which to direct the request. For example, us-central1, us-west1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly"></a>

```go
ValidateOnly interface{}
```

- *Type:* interface{}

If true, the request is validated but not actually executed. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
	JobName: *string,
	ContainerSpecGcsPath: *string,
	Environment: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment,
	LaunchOptions: *map[string]*string,
	Parameters: *map[string]*string,
	TransformNameMappings: *map[string]*string,
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName">JobName</a></code> | <code>*string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions">LaunchOptions</a></code> | <code>*map[string]*string</code> | Launch options for this Flex Template job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | 'The parameters for the Flex Template. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings">TransformNameMappings</a></code> | <code>*map[string]*string</code> | 'Use this to pass transform name mappings for streaming update jobs. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update">Update</a></code> | <code>interface{}</code> | Set this to true if you are sending a request to update a running streaming job. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The job name to use for the created job.

For an update job request, the job name should be the same as the existing running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `ContainerSpecGcsPath`<sup>Optional</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath"></a>

```go
ContainerSpecGcsPath *string
```

- *Type:* *string

Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#container_spec_gcs_path DataPipelinePipeline#container_spec_gcs_path}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment"></a>

```go
Environment DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `LaunchOptions`<sup>Optional</sup> <a name="LaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions"></a>

```go
LaunchOptions *map[string]*string
```

- *Type:* *map[string]*string

Launch options for this Flex Template job.

This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#launch_options DataPipelinePipeline#launch_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

'The parameters for the Flex Template.

Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `TransformNameMappings`<sup>Optional</sup> <a name="TransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings"></a>

```go
TransformNameMappings *map[string]*string
```

- *Type:* *map[string]*string

'Use this to pass transform name mappings for streaming update jobs.

Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#transform_name_mappings DataPipelinePipeline#transform_name_mappings}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Set this to true if you are sending a request to update a running streaming job.

When set, the job name should be the same as the running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment {
	AdditionalExperiments: *[]*string,
	AdditionalUserLabels: *map[string]*string,
	EnableStreamingEngine: interface{},
	FlexrsGoal: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	ServiceAccountEmail: *string,
	Subnetwork: *string,
	TempLocation: *string,
	WorkerRegion: *string,
	WorkerZone: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal">FlexrsGoal</a></code> | <code>*string</code> | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network">Network</a></code> | <code>*string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone">WorkerZone</a></code> | <code>*string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels"></a>

```go
AdditionalUserLabels *map[string]*string
```

- *Type:* *map[string]*string

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `FlexrsGoal`<sup>Optional</sup> <a name="FlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal"></a>

```go
FlexrsGoal *string
```

- *Type:* *string

Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#flexrs_goal DataPipelinePipeline#flexrs_goal}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network"></a>

```go
Network *string
```

- *Type:* *string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion"></a>

```go
WorkerRegion *string
```

- *Type:* *string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone"></a>

```go
WorkerZone *string
```

- *Type:* *string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest {
	ProjectId: *string,
	GcsPath: *string,
	LaunchParameters: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters,
	Location: *string,
	ValidateOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath">GcsPath</a></code> | <code>*string</code> | A Cloud Storage path to the template from which to create the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | launch_parameters block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location">Location</a></code> | <code>*string</code> | The regional endpoint to which to direct the request. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `GcsPath`<sup>Optional</sup> <a name="GcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath"></a>

```go
GcsPath *string
```

- *Type:* *string

A Cloud Storage path to the template from which to create the job.

Must be a valid Cloud Storage URL, beginning with 'gs://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#gcs_path DataPipelinePipeline#gcs_path}

---

##### `LaunchParameters`<sup>Optional</sup> <a name="LaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters"></a>

```go
LaunchParameters DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

launch_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#launch_parameters DataPipelinePipeline#launch_parameters}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location"></a>

```go
Location *string
```

- *Type:* *string

The regional endpoint to which to direct the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly"></a>

```go
ValidateOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}.

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
	JobName: *string,
	Environment: github.com/cdktf/cdktf-provider-google-go/google/v13.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment,
	Parameters: *map[string]*string,
	TransformNameMapping: *map[string]*string,
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName">JobName</a></code> | <code>*string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | The runtime parameters to pass to the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update">Update</a></code> | <code>interface{}</code> | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The job name to use for the created job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment"></a>

```go
Environment DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

The runtime parameters to pass to the job.

'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.

Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#transform_name_mapping DataPipelinePipeline#transform_name_mapping}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

&datapipelinepipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
	AdditionalExperiments: *[]*string,
	AdditionalUserLabels: *map[string]*string,
	BypassTempDirValidation: interface{},
	EnableStreamingEngine: interface{},
	IpConfiguration: *string,
	KmsKeyName: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	ServiceAccountEmail: *string,
	Subnetwork: *string,
	TempLocation: *string,
	WorkerRegion: *string,
	WorkerZone: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>interface{}</code> | Whether to bypass the safety checks for the job's temporary directory. Use with caution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network">Network</a></code> | <code>*string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone">WorkerZone</a></code> | <code>*string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels"></a>

```go
AdditionalUserLabels *map[string]*string
```

- *Type:* *map[string]*string

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `BypassTempDirValidation`<sup>Optional</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation"></a>

```go
BypassTempDirValidation interface{}
```

- *Type:* interface{}

Whether to bypass the safety checks for the job's temporary directory. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#bypass_temp_dir_validation DataPipelinePipeline#bypass_temp_dir_validation}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network"></a>

```go
Network *string
```

- *Type:* *string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion"></a>

```go
WorkerRegion *string
```

- *Type:* *string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone"></a>

```go
WorkerZone *string
```

- *Type:* *string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPipelinePipelineScheduleInfoOutputReference <a name="DataPipelinePipelineScheduleInfoOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineScheduleInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineScheduleInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime">NextJobTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextJobTime`<sup>Required</sup> <a name="NextJobTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime"></a>

```go
func NextJobTime() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---


### DataPipelinePipelineTimeoutsOutputReference <a name="DataPipelinePipelineTimeoutsOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal">ResetFlexrsGoal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```go
func ResetAdditionalUserLabels()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetFlexrsGoal` <a name="ResetFlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal"></a>

```go
func ResetFlexrsGoal()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion"></a>

```go
func ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone"></a>

```go
func ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput">FlexrsGoalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal">FlexrsGoal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```go
func AdditionalUserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `FlexrsGoalInput`<sup>Optional</sup> <a name="FlexrsGoalInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput"></a>

```go
func FlexrsGoalInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput"></a>

```go
func WorkerRegionInput() *string
```

- *Type:* *string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput"></a>

```go
func WorkerZoneInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels"></a>

```go
func AdditionalUserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `FlexrsGoal`<sup>Required</sup> <a name="FlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal"></a>

```go
func FlexrsGoal() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion"></a>

```go
func WorkerRegion() *string
```

- *Type:* *string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone"></a>

```go
func WorkerZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath">ResetContainerSpecGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions">ResetLaunchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings">ResetTransformNameMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `ResetContainerSpecGcsPath` <a name="ResetContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath"></a>

```go
func ResetContainerSpecGcsPath()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetLaunchOptions` <a name="ResetLaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions"></a>

```go
func ResetLaunchOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTransformNameMappings` <a name="ResetTransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings"></a>

```go
func ResetTransformNameMappings()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput">LaunchOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput">TransformNameMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions">LaunchOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings">TransformNameMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment"></a>

```go
func Environment() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a>

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput"></a>

```go
func ContainerSpecGcsPathInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `LaunchOptionsInput`<sup>Optional</sup> <a name="LaunchOptionsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput"></a>

```go
func LaunchOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappingsInput`<sup>Optional</sup> <a name="TransformNameMappingsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput"></a>

```go
func TransformNameMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath"></a>

```go
func ContainerSpecGcsPath() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions"></a>

```go
func LaunchOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappings`<sup>Required</sup> <a name="TransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings"></a>

```go
func TransformNameMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter">PutLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameter` <a name="PutLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter"></a>

```go
func PutLaunchParameter(value DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly"></a>

```go
func ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput">LaunchParameterInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter"></a>

```go
func LaunchParameter() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a>

---

##### `LaunchParameterInput`<sup>Optional</sup> <a name="LaunchParameterInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput"></a>

```go
func LaunchParameterInput() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput"></a>

```go
func ValidateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly"></a>

```go
func ValidateOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation">ResetBypassTempDirValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```go
func ResetAdditionalUserLabels()
```

##### `ResetBypassTempDirValidation` <a name="ResetBypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation"></a>

```go
func ResetBypassTempDirValidation()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion"></a>

```go
func ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone"></a>

```go
func ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput">BypassTempDirValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```go
func AdditionalUserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BypassTempDirValidationInput`<sup>Optional</sup> <a name="BypassTempDirValidationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput"></a>

```go
func BypassTempDirValidationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput"></a>

```go
func WorkerRegionInput() *string
```

- *Type:* *string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput"></a>

```go
func WorkerZoneInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels"></a>

```go
func AdditionalUserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BypassTempDirValidation`<sup>Required</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation"></a>

```go
func BypassTempDirValidation() interface{}
```

- *Type:* interface{}

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion"></a>

```go
func WorkerRegion() *string
```

- *Type:* *string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone"></a>

```go
func WorkerZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment"></a>

```go
func Environment() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters">PutLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath">ResetGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters">ResetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameters` <a name="PutLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters"></a>

```go
func PutLaunchParameters(value DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `ResetGcsPath` <a name="ResetGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath"></a>

```go
func ResetGcsPath()
```

##### `ResetLaunchParameters` <a name="ResetLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters"></a>

```go
func ResetLaunchParameters()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly"></a>

```go
func ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput">GcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput">LaunchParametersInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath">GcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters"></a>

```go
func LaunchParameters() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a>

---

##### `GcsPathInput`<sup>Optional</sup> <a name="GcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput"></a>

```go
func GcsPathInput() *string
```

- *Type:* *string

---

##### `LaunchParametersInput`<sup>Optional</sup> <a name="LaunchParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput"></a>

```go
func LaunchParametersInput() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput"></a>

```go
func ValidateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `GcsPath`<sup>Required</sup> <a name="GcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath"></a>

```go
func GcsPath() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly"></a>

```go
func ValidateOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---


### DataPipelinePipelineWorkloadOutputReference <a name="DataPipelinePipelineWorkloadOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datapipelinepipeline"

datapipelinepipeline.NewDataPipelinePipelineWorkloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPipelinePipelineWorkloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest">PutDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest">PutDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest">ResetDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest">ResetDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowFlexTemplateRequest` <a name="PutDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest"></a>

```go
func PutDataflowFlexTemplateRequest(value DataPipelinePipelineWorkloadDataflowFlexTemplateRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `PutDataflowLaunchTemplateRequest` <a name="PutDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest"></a>

```go
func PutDataflowLaunchTemplateRequest(value DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `ResetDataflowFlexTemplateRequest` <a name="ResetDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest"></a>

```go
func ResetDataflowFlexTemplateRequest()
```

##### `ResetDataflowLaunchTemplateRequest` <a name="ResetDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest"></a>

```go
func ResetDataflowLaunchTemplateRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput">DataflowFlexTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput">DataflowLaunchTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowFlexTemplateRequest`<sup>Required</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest"></a>

```go
func DataflowFlexTemplateRequest() DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a>

---

##### `DataflowLaunchTemplateRequest`<sup>Required</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest"></a>

```go
func DataflowLaunchTemplateRequest() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a>

---

##### `DataflowFlexTemplateRequestInput`<sup>Optional</sup> <a name="DataflowFlexTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput"></a>

```go
func DataflowFlexTemplateRequestInput() DataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `DataflowLaunchTemplateRequestInput`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput"></a>

```go
func DataflowLaunchTemplateRequestInput() DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---



