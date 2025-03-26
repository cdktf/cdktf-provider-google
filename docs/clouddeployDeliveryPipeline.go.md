# `clouddeployDeliveryPipeline` Submodule <a name="`clouddeployDeliveryPipeline` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipeline <a name="ClouddeployDeliveryPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipeline(scope Construct, id *string, config ClouddeployDeliveryPipelineConfig) ClouddeployDeliveryPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline">PutSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline">ResetSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialPipeline` <a name="PutSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline"></a>

```go
func PutSerialPipeline(value ClouddeployDeliveryPipelineSerialPipeline)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts"></a>

```go
func PutTimeouts(value ClouddeployDeliveryPipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSerialPipeline` <a name="ResetSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline"></a>

```go
func ResetSerialPipeline()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClouddeployDeliveryPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClouddeployDeliveryPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployDeliveryPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline">SerialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput">SerialPipelineInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition"></a>

```go
func Condition() ClouddeployDeliveryPipelineConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `SerialPipeline`<sup>Required</sup> <a name="SerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline"></a>

```go
func SerialPipeline() ClouddeployDeliveryPipelineSerialPipelineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts"></a>

```go
func Timeouts() ClouddeployDeliveryPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SerialPipelineInput`<sup>Optional</sup> <a name="SerialPipelineInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput"></a>

```go
func SerialPipelineInput() ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineCondition <a name="ClouddeployDeliveryPipelineCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineCondition {

}
```


### ClouddeployDeliveryPipelineConditionPipelineReadyCondition <a name="ClouddeployDeliveryPipelineConditionPipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition {

}
```


### ClouddeployDeliveryPipelineConditionTargetsPresentCondition <a name="ClouddeployDeliveryPipelineConditionTargetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition {

}
```


### ClouddeployDeliveryPipelineConditionTargetsTypeCondition <a name="ClouddeployDeliveryPipelineConditionTargetsTypeCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition {

}
```


### ClouddeployDeliveryPipelineConfig <a name="ClouddeployDeliveryPipelineConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConfig {
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
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	SerialPipeline: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline,
	Suspended: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name">Name</a></code> | <code>*string</code> | Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User annotations. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description">Description</a></code> | <code>*string</code> | Description of the `DeliveryPipeline`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline">SerialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | serial_pipeline block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | When suspended, no new releases or rollouts can be created, but in-progress ones will complete. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#location ClouddeployDeliveryPipeline#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#name ClouddeployDeliveryPipeline#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User annotations.

These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#annotations ClouddeployDeliveryPipeline#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the `DeliveryPipeline`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#description ClouddeployDeliveryPipeline#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#project ClouddeployDeliveryPipeline#project}

---

##### `SerialPipeline`<sup>Optional</sup> <a name="SerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline"></a>

```go
SerialPipeline ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

serial_pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#serial_pipeline ClouddeployDeliveryPipeline#serial_pipeline}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

When suspended, no new releases or rollouts can be created, but in-progress ones will complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#suspended ClouddeployDeliveryPipeline#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts"></a>

```go
Timeouts ClouddeployDeliveryPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#timeouts ClouddeployDeliveryPipeline#timeouts}

---

### ClouddeployDeliveryPipelineSerialPipeline <a name="ClouddeployDeliveryPipelineSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipeline {
	Stages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages">Stages</a></code> | <code>interface{}</code> | stages block. |

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#stages ClouddeployDeliveryPipeline#stages}

---

### ClouddeployDeliveryPipelineSerialPipelineStages <a name="ClouddeployDeliveryPipelineSerialPipelineStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStages {
	DeployParameters: interface{},
	Profiles: *[]*string,
	Strategy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.deployParameters">DeployParameters</a></code> | <code>interface{}</code> | deploy_parameters block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles">Profiles</a></code> | <code>*[]*string</code> | Skaffold profiles to use when rendering the manifest for this stage's `Target`. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId">TargetId</a></code> | <code>*string</code> | The target_id to which this stage points. |

---

##### `DeployParameters`<sup>Optional</sup> <a name="DeployParameters" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.deployParameters"></a>

```go
DeployParameters interface{}
```

- *Type:* interface{}

deploy_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#deploy_parameters ClouddeployDeliveryPipeline#deploy_parameters}

---

##### `Profiles`<sup>Optional</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

Skaffold profiles to use when rendering the manifest for this stage's `Target`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.strategy"></a>

```go
Strategy ClouddeployDeliveryPipelineSerialPipelineStagesStrategy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#strategy ClouddeployDeliveryPipeline#strategy}

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

The target_id to which this stage points.

This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#target_id ClouddeployDeliveryPipeline#target_id}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters <a name="ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters {
	Values: *map[string]*string,
	MatchTargetLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.values">Values</a></code> | <code>*map[string]*string</code> | Required. Values are deploy parameters in key-value pairs. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.matchTargetLabels">MatchTargetLabels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.values"></a>

```go
Values *map[string]*string
```

- *Type:* *map[string]*string

Required. Values are deploy parameters in key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#values ClouddeployDeliveryPipeline#values}

---

##### `MatchTargetLabels`<sup>Optional</sup> <a name="MatchTargetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.matchTargetLabels"></a>

```go
MatchTargetLabels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#match_target_labels ClouddeployDeliveryPipeline#match_target_labels}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy {
	Canary: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary,
	Standard: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard">Standard</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | standard block. |

---

##### `Canary`<sup>Optional</sup> <a name="Canary" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.canary"></a>

```go
Canary ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#canary ClouddeployDeliveryPipeline#canary}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard"></a>

```go
Standard ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

standard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#standard ClouddeployDeliveryPipeline#standard}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary {
	CanaryDeployment: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment,
	CustomCanaryDeployment: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment,
	RuntimeConfig: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.canaryDeployment">CanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | canary_deployment block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.customCanaryDeployment">CustomCanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | custom_canary_deployment block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | runtime_config block. |

---

##### `CanaryDeployment`<sup>Optional</sup> <a name="CanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.canaryDeployment"></a>

```go
CanaryDeployment ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

canary_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#canary_deployment ClouddeployDeliveryPipeline#canary_deployment}

---

##### `CustomCanaryDeployment`<sup>Optional</sup> <a name="CustomCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.customCanaryDeployment"></a>

```go
CustomCanaryDeployment ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

custom_canary_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#custom_canary_deployment ClouddeployDeliveryPipeline#custom_canary_deployment}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.runtimeConfig"></a>

```go
RuntimeConfig ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#runtime_config ClouddeployDeliveryPipeline#runtime_config}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment {
	Percentages: *[]*f64,
	Postdeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy,
	Predeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy,
	Verify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.percentages">Percentages</a></code> | <code>*[]*f64</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.verify">Verify</a></code> | <code>interface{}</code> | Whether to run verify tests after each percentage deployment. |

---

##### `Percentages`<sup>Required</sup> <a name="Percentages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.percentages"></a>

```go
Percentages *[]*f64
```

- *Type:* *[]*f64

Required.

The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#percentages ClouddeployDeliveryPipeline#percentages}

---

##### `Postdeploy`<sup>Optional</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.postdeploy"></a>

```go
Postdeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}

---

##### `Predeploy`<sup>Optional</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.predeploy"></a>

```go
Predeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Whether to run verify tests after each percentage deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
	PhaseConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.property.phaseConfigs">PhaseConfigs</a></code> | <code>interface{}</code> | phase_configs block. |

---

##### `PhaseConfigs`<sup>Required</sup> <a name="PhaseConfigs" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.property.phaseConfigs"></a>

```go
PhaseConfigs interface{}
```

- *Type:* interface{}

phase_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#phase_configs ClouddeployDeliveryPipeline#phase_configs}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
	Percentage: *f64,
	PhaseId: *string,
	Postdeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy,
	Predeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy,
	Profiles: *[]*string,
	Verify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.percentage">Percentage</a></code> | <code>*f64</code> | Required. Percentage deployment for the phase. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.phaseId">PhaseId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.profiles">Profiles</a></code> | <code>*[]*string</code> | Skaffold profiles to use when rendering the manifest for this phase. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.verify">Verify</a></code> | <code>interface{}</code> | Whether to run verify tests after the deployment. |

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

Required. Percentage deployment for the phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#percentage ClouddeployDeliveryPipeline#percentage}

---

##### `PhaseId`<sup>Required</sup> <a name="PhaseId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.phaseId"></a>

```go
PhaseId *string
```

- *Type:* *string

Required.

The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#phase_id ClouddeployDeliveryPipeline#phase_id}

---

##### `Postdeploy`<sup>Optional</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.postdeploy"></a>

```go
Postdeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}

---

##### `Predeploy`<sup>Optional</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.predeploy"></a>

```go
Predeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}

---

##### `Profiles`<sup>Optional</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

Skaffold profiles to use when rendering the manifest for this phase.

These are in addition to the profiles list specified in the `DeliveryPipeline` stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Whether to run verify tests after the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig {
	CloudRun: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun,
	Kubernetes: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | kubernetes block. |

---

##### `CloudRun`<sup>Optional</sup> <a name="CloudRun" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.cloudRun"></a>

```go
CloudRun ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#cloud_run ClouddeployDeliveryPipeline#cloud_run}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.kubernetes"></a>

```go
Kubernetes ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#kubernetes ClouddeployDeliveryPipeline#kubernetes}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
	AutomaticTrafficControl: interface{},
	CanaryRevisionTags: *[]*string,
	PriorRevisionTags: *[]*string,
	StableRevisionTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.automaticTrafficControl">AutomaticTrafficControl</a></code> | <code>interface{}</code> | Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.canaryRevisionTags">CanaryRevisionTags</a></code> | <code>*[]*string</code> | Optional. A list of tags that are added to the canary revision while the canary phase is in progress. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.priorRevisionTags">PriorRevisionTags</a></code> | <code>*[]*string</code> | Optional. A list of tags that are added to the prior revision while the canary phase is in progress. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.stableRevisionTags">StableRevisionTags</a></code> | <code>*[]*string</code> | Optional. A list of tags that are added to the final stable revision when the stable phase is applied. |

---

##### `AutomaticTrafficControl`<sup>Optional</sup> <a name="AutomaticTrafficControl" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.automaticTrafficControl"></a>

```go
AutomaticTrafficControl interface{}
```

- *Type:* interface{}

Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting.

This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#automatic_traffic_control ClouddeployDeliveryPipeline#automatic_traffic_control}

---

##### `CanaryRevisionTags`<sup>Optional</sup> <a name="CanaryRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.canaryRevisionTags"></a>

```go
CanaryRevisionTags *[]*string
```

- *Type:* *[]*string

Optional. A list of tags that are added to the canary revision while the canary phase is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#canary_revision_tags ClouddeployDeliveryPipeline#canary_revision_tags}

---

##### `PriorRevisionTags`<sup>Optional</sup> <a name="PriorRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.priorRevisionTags"></a>

```go
PriorRevisionTags *[]*string
```

- *Type:* *[]*string

Optional. A list of tags that are added to the prior revision while the canary phase is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#prior_revision_tags ClouddeployDeliveryPipeline#prior_revision_tags}

---

##### `StableRevisionTags`<sup>Optional</sup> <a name="StableRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.stableRevisionTags"></a>

```go
StableRevisionTags *[]*string
```

- *Type:* *[]*string

Optional. A list of tags that are added to the final stable revision when the stable phase is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#stable_revision_tags ClouddeployDeliveryPipeline#stable_revision_tags}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
	GatewayServiceMesh: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh,
	ServiceNetworking: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.gatewayServiceMesh">GatewayServiceMesh</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | gateway_service_mesh block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.serviceNetworking">ServiceNetworking</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | service_networking block. |

---

##### `GatewayServiceMesh`<sup>Optional</sup> <a name="GatewayServiceMesh" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.gatewayServiceMesh"></a>

```go
GatewayServiceMesh ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

gateway_service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#gateway_service_mesh ClouddeployDeliveryPipeline#gateway_service_mesh}

---

##### `ServiceNetworking`<sup>Optional</sup> <a name="ServiceNetworking" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.serviceNetworking"></a>

```go
ServiceNetworking ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

service_networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#service_networking ClouddeployDeliveryPipeline#service_networking}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
	Deployment: *string,
	HttpRoute: *string,
	Service: *string,
	PodSelectorLabel: *string,
	RouteDestinations: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations,
	RouteUpdateWaitTime: *string,
	StableCutbackDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.deployment">Deployment</a></code> | <code>*string</code> | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.httpRoute">HttpRoute</a></code> | <code>*string</code> | Required. Name of the Gateway API HTTPRoute. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.service">Service</a></code> | <code>*string</code> | Required. Name of the Kubernetes Service. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.podSelectorLabel">PodSelectorLabel</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeDestinations">RouteDestinations</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | route_destinations block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeUpdateWaitTime">RouteUpdateWaitTime</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.stableCutbackDuration">StableCutbackDuration</a></code> | <code>*string</code> | Optional. |

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.deployment"></a>

```go
Deployment *string
```

- *Type:* *string

Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.httpRoute"></a>

```go
HttpRoute *string
```

- *Type:* *string

Required. Name of the Gateway API HTTPRoute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#http_route ClouddeployDeliveryPipeline#http_route}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. Name of the Kubernetes Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}

---

##### `PodSelectorLabel`<sup>Optional</sup> <a name="PodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.podSelectorLabel"></a>

```go
PodSelectorLabel *string
```

- *Type:* *string

Optional.

The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#pod_selector_label ClouddeployDeliveryPipeline#pod_selector_label}

---

##### `RouteDestinations`<sup>Optional</sup> <a name="RouteDestinations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeDestinations"></a>

```go
RouteDestinations ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

route_destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#route_destinations ClouddeployDeliveryPipeline#route_destinations}

---

##### `RouteUpdateWaitTime`<sup>Optional</sup> <a name="RouteUpdateWaitTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeUpdateWaitTime"></a>

```go
RouteUpdateWaitTime *string
```

- *Type:* *string

Optional.

The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#route_update_wait_time ClouddeployDeliveryPipeline#route_update_wait_time}

---

##### `StableCutbackDuration`<sup>Optional</sup> <a name="StableCutbackDuration" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.stableCutbackDuration"></a>

```go
StableCutbackDuration *string
```

- *Type:* *string

Optional.

The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#stable_cutback_duration ClouddeployDeliveryPipeline#stable_cutback_duration}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations {
	DestinationIds: *[]*string,
	PropagateService: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.propagateService">PropagateService</a></code> | <code>interface{}</code> | Optional. |

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.destinationIds"></a>

```go
DestinationIds *[]*string
```

- *Type:* *[]*string

Required.

The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#destination_ids ClouddeployDeliveryPipeline#destination_ids}

---

##### `PropagateService`<sup>Optional</sup> <a name="PropagateService" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.propagateService"></a>

```go
PropagateService interface{}
```

- *Type:* interface{}

Optional.

Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitiate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#propagate_service ClouddeployDeliveryPipeline#propagate_service}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
	Deployment: *string,
	Service: *string,
	DisablePodOverprovisioning: interface{},
	PodSelectorLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.deployment">Deployment</a></code> | <code>*string</code> | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.service">Service</a></code> | <code>*string</code> | Required. Name of the Kubernetes Service. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.disablePodOverprovisioning">DisablePodOverprovisioning</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.podSelectorLabel">PodSelectorLabel</a></code> | <code>*string</code> | Optional. |

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.deployment"></a>

```go
Deployment *string
```

- *Type:* *string

Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. Name of the Kubernetes Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}

---

##### `DisablePodOverprovisioning`<sup>Optional</sup> <a name="DisablePodOverprovisioning" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.disablePodOverprovisioning"></a>

```go
DisablePodOverprovisioning interface{}
```

- *Type:* interface{}

Optional.

Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#disable_pod_overprovisioning ClouddeployDeliveryPipeline#disable_pod_overprovisioning}

---

##### `PodSelectorLabel`<sup>Optional</sup> <a name="PodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.podSelectorLabel"></a>

```go
PodSelectorLabel *string
```

- *Type:* *string

Optional.

The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#pod_selector_label ClouddeployDeliveryPipeline#pod_selector_label}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard {
	Postdeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy,
	Predeploy: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy,
	Verify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify">Verify</a></code> | <code>interface{}</code> | Whether to verify a deployment. |

---

##### `Postdeploy`<sup>Optional</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.postdeploy"></a>

```go
Postdeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}

---

##### `Predeploy`<sup>Optional</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.predeploy"></a>

```go
Predeploy ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Whether to verify a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy {
	Actions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.property.actions">Actions</a></code> | <code>*[]*string</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}

---

### ClouddeployDeliveryPipelineTimeouts <a name="ClouddeployDeliveryPipelineTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineConditionList <a name="ClouddeployDeliveryPipelineConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition">PipelineReadyCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition">TargetsPresentCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition">TargetsTypeCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList">ClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineReadyCondition`<sup>Required</sup> <a name="PipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition"></a>

```go
func PipelineReadyCondition() ClouddeployDeliveryPipelineConditionPipelineReadyConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a>

---

##### `TargetsPresentCondition`<sup>Required</sup> <a name="TargetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition"></a>

```go
func TargetsPresentCondition() ClouddeployDeliveryPipelineConditionTargetsPresentConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a>

---

##### `TargetsTypeCondition`<sup>Required</sup> <a name="TargetsTypeCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition"></a>

```go
func TargetsTypeCondition() ClouddeployDeliveryPipelineConditionTargetsTypeConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList">ClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a>

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionList <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionPipelineReadyConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionPipelineReadyConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineConditionPipelineReadyCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a>

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionList <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsPresentConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionTargetsPresentConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets">MissingTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MissingTargets`<sup>Required</sup> <a name="MissingTargets" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets"></a>

```go
func MissingTargets() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineConditionTargetsPresentCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a>

---


### ClouddeployDeliveryPipelineConditionTargetsTypeConditionList <a name="ClouddeployDeliveryPipelineConditionTargetsTypeConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsTypeConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionTargetsTypeConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition">ClouddeployDeliveryPipelineConditionTargetsTypeCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineConditionTargetsTypeCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition">ClouddeployDeliveryPipelineConditionTargetsTypeCondition</a>

---


### ClouddeployDeliveryPipelineSerialPipelineOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStages` <a name="PutStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStages` <a name="ResetStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages"></a>

```go
func ResetStages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages"></a>

```go
func Stages() ClouddeployDeliveryPipelineSerialPipelineStagesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a>

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList <a name="ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resetMatchTargetLabels">ResetMatchTargetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchTargetLabels` <a name="ResetMatchTargetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resetMatchTargetLabels"></a>

```go
func ResetMatchTargetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabelsInput">MatchTargetLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabels">MatchTargetLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.values">Values</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchTargetLabelsInput`<sup>Optional</sup> <a name="MatchTargetLabelsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabelsInput"></a>

```go
func MatchTargetLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchTargetLabels`<sup>Required</sup> <a name="MatchTargetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabels"></a>

```go
func MatchTargetLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.values"></a>

```go
func Values() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesList <a name="ClouddeployDeliveryPipelineSerialPipelineStagesList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters">PutDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetDeployParameters">ResetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles">ResetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeployParameters` <a name="PutDeployParameters" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters"></a>

```go
func PutDeployParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy"></a>

```go
func PutStrategy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `ResetDeployParameters` <a name="ResetDeployParameters" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetDeployParameters"></a>

```go
func ResetDeployParameters()
```

##### `ResetProfiles` <a name="ResetProfiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles"></a>

```go
func ResetProfiles()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId"></a>

```go
func ResetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParameters">DeployParameters</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList">ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParametersInput">DeployParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput">StrategyInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployParameters`<sup>Required</sup> <a name="DeployParameters" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParameters"></a>

```go
func DeployParameters() ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList">ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy"></a>

```go
func Strategy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a>

---

##### `DeployParametersInput`<sup>Optional</sup> <a name="DeployParametersInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParametersInput"></a>

```go
func DeployParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput"></a>

```go
func StrategyInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy">PutPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy">PutPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPostdeploy">ResetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPredeploy">ResetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetVerify">ResetVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostdeploy` <a name="PutPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy"></a>

```go
func PutPostdeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---

##### `PutPredeploy` <a name="PutPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy"></a>

```go
func PutPredeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---

##### `ResetPostdeploy` <a name="ResetPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPostdeploy"></a>

```go
func ResetPostdeploy()
```

##### `ResetPredeploy` <a name="ResetPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPredeploy"></a>

```go
func ResetPredeploy()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetVerify"></a>

```go
func ResetVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentagesInput">PercentagesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeployInput">PostdeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeployInput">PredeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentages">Percentages</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Postdeploy`<sup>Required</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeploy"></a>

```go
func Postdeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference</a>

---

##### `Predeploy`<sup>Required</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeploy"></a>

```go
func Predeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference</a>

---

##### `PercentagesInput`<sup>Optional</sup> <a name="PercentagesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentagesInput"></a>

```go
func PercentagesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PostdeployInput`<sup>Optional</sup> <a name="PostdeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeployInput"></a>

```go
func PostdeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---

##### `PredeployInput`<sup>Optional</sup> <a name="PredeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeployInput"></a>

```go
func PredeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `Percentages`<sup>Required</sup> <a name="Percentages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentages"></a>

```go
func Percentages() *[]*f64
```

- *Type:* *[]*f64

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs">PutPhaseConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPhaseConfigs` <a name="PutPhaseConfigs" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs"></a>

```go
func PutPhaseConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigs">PhaseConfigs</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigsInput">PhaseConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PhaseConfigs`<sup>Required</sup> <a name="PhaseConfigs" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigs"></a>

```go
func PhaseConfigs() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList</a>

---

##### `PhaseConfigsInput`<sup>Optional</sup> <a name="PhaseConfigsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigsInput"></a>

```go
func PhaseConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy">PutPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy">PutPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPostdeploy">ResetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPredeploy">ResetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetProfiles">ResetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetVerify">ResetVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostdeploy` <a name="PutPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy"></a>

```go
func PutPostdeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---

##### `PutPredeploy` <a name="PutPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy"></a>

```go
func PutPredeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---

##### `ResetPostdeploy` <a name="ResetPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPostdeploy"></a>

```go
func ResetPostdeploy()
```

##### `ResetPredeploy` <a name="ResetPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPredeploy"></a>

```go
func ResetPredeploy()
```

##### `ResetProfiles` <a name="ResetProfiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetProfiles"></a>

```go
func ResetProfiles()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetVerify"></a>

```go
func ResetVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseIdInput">PhaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeployInput">PostdeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeployInput">PredeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseId">PhaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Postdeploy`<sup>Required</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeploy"></a>

```go
func Postdeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference</a>

---

##### `Predeploy`<sup>Required</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeploy"></a>

```go
func Predeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference</a>

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `PhaseIdInput`<sup>Optional</sup> <a name="PhaseIdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseIdInput"></a>

```go
func PhaseIdInput() *string
```

- *Type:* *string

---

##### `PostdeployInput`<sup>Optional</sup> <a name="PostdeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeployInput"></a>

```go
func PostdeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---

##### `PredeployInput`<sup>Optional</sup> <a name="PredeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeployInput"></a>

```go
func PredeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `PhaseId`<sup>Required</sup> <a name="PhaseId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseId"></a>

```go
func PhaseId() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment">PutCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment">PutCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCanaryDeployment">ResetCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCustomCanaryDeployment">ResetCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanaryDeployment` <a name="PutCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment"></a>

```go
func PutCanaryDeployment(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---

##### `PutCustomCanaryDeployment` <a name="PutCustomCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment"></a>

```go
func PutCustomCanaryDeployment(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---

##### `ResetCanaryDeployment` <a name="ResetCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCanaryDeployment"></a>

```go
func ResetCanaryDeployment()
```

##### `ResetCustomCanaryDeployment` <a name="ResetCustomCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCustomCanaryDeployment"></a>

```go
func ResetCustomCanaryDeployment()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeployment">CanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeployment">CustomCanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeploymentInput">CanaryDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeploymentInput">CustomCanaryDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanaryDeployment`<sup>Required</sup> <a name="CanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeployment"></a>

```go
func CanaryDeployment() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference</a>

---

##### `CustomCanaryDeployment`<sup>Required</sup> <a name="CustomCanaryDeployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeployment"></a>

```go
func CustomCanaryDeployment() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfig"></a>

```go
func RuntimeConfig() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference</a>

---

##### `CanaryDeploymentInput`<sup>Optional</sup> <a name="CanaryDeploymentInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeploymentInput"></a>

```go
func CanaryDeploymentInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---

##### `CustomCanaryDeploymentInput`<sup>Optional</sup> <a name="CustomCanaryDeploymentInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeploymentInput"></a>

```go
func CustomCanaryDeploymentInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetAutomaticTrafficControl">ResetAutomaticTrafficControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetCanaryRevisionTags">ResetCanaryRevisionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetPriorRevisionTags">ResetPriorRevisionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetStableRevisionTags">ResetStableRevisionTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticTrafficControl` <a name="ResetAutomaticTrafficControl" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetAutomaticTrafficControl"></a>

```go
func ResetAutomaticTrafficControl()
```

##### `ResetCanaryRevisionTags` <a name="ResetCanaryRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetCanaryRevisionTags"></a>

```go
func ResetCanaryRevisionTags()
```

##### `ResetPriorRevisionTags` <a name="ResetPriorRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetPriorRevisionTags"></a>

```go
func ResetPriorRevisionTags()
```

##### `ResetStableRevisionTags` <a name="ResetStableRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetStableRevisionTags"></a>

```go
func ResetStableRevisionTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControlInput">AutomaticTrafficControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTagsInput">CanaryRevisionTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTagsInput">PriorRevisionTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTagsInput">StableRevisionTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControl">AutomaticTrafficControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTags">CanaryRevisionTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTags">PriorRevisionTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTags">StableRevisionTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticTrafficControlInput`<sup>Optional</sup> <a name="AutomaticTrafficControlInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControlInput"></a>

```go
func AutomaticTrafficControlInput() interface{}
```

- *Type:* interface{}

---

##### `CanaryRevisionTagsInput`<sup>Optional</sup> <a name="CanaryRevisionTagsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTagsInput"></a>

```go
func CanaryRevisionTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PriorRevisionTagsInput`<sup>Optional</sup> <a name="PriorRevisionTagsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTagsInput"></a>

```go
func PriorRevisionTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StableRevisionTagsInput`<sup>Optional</sup> <a name="StableRevisionTagsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTagsInput"></a>

```go
func StableRevisionTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutomaticTrafficControl`<sup>Required</sup> <a name="AutomaticTrafficControl" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControl"></a>

```go
func AutomaticTrafficControl() interface{}
```

- *Type:* interface{}

---

##### `CanaryRevisionTags`<sup>Required</sup> <a name="CanaryRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTags"></a>

```go
func CanaryRevisionTags() *[]*string
```

- *Type:* *[]*string

---

##### `PriorRevisionTags`<sup>Required</sup> <a name="PriorRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTags"></a>

```go
func PriorRevisionTags() *[]*string
```

- *Type:* *[]*string

---

##### `StableRevisionTags`<sup>Required</sup> <a name="StableRevisionTags" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTags"></a>

```go
func StableRevisionTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations">PutRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetPodSelectorLabel">ResetPodSelectorLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteDestinations">ResetRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteUpdateWaitTime">ResetRouteUpdateWaitTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetStableCutbackDuration">ResetStableCutbackDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouteDestinations` <a name="PutRouteDestinations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations"></a>

```go
func PutRouteDestinations(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---

##### `ResetPodSelectorLabel` <a name="ResetPodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetPodSelectorLabel"></a>

```go
func ResetPodSelectorLabel()
```

##### `ResetRouteDestinations` <a name="ResetRouteDestinations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteDestinations"></a>

```go
func ResetRouteDestinations()
```

##### `ResetRouteUpdateWaitTime` <a name="ResetRouteUpdateWaitTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteUpdateWaitTime"></a>

```go
func ResetRouteUpdateWaitTime()
```

##### `ResetStableCutbackDuration` <a name="ResetStableCutbackDuration" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetStableCutbackDuration"></a>

```go
func ResetStableCutbackDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinations">RouteDestinations</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deploymentInput">DeploymentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRouteInput">HttpRouteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabelInput">PodSelectorLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinationsInput">RouteDestinationsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTimeInput">RouteUpdateWaitTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDurationInput">StableCutbackDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRoute">HttpRoute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabel">PodSelectorLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTime">RouteUpdateWaitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDuration">StableCutbackDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouteDestinations`<sup>Required</sup> <a name="RouteDestinations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinations"></a>

```go
func RouteDestinations() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference</a>

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deploymentInput"></a>

```go
func DeploymentInput() *string
```

- *Type:* *string

---

##### `HttpRouteInput`<sup>Optional</sup> <a name="HttpRouteInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRouteInput"></a>

```go
func HttpRouteInput() *string
```

- *Type:* *string

---

##### `PodSelectorLabelInput`<sup>Optional</sup> <a name="PodSelectorLabelInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabelInput"></a>

```go
func PodSelectorLabelInput() *string
```

- *Type:* *string

---

##### `RouteDestinationsInput`<sup>Optional</sup> <a name="RouteDestinationsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinationsInput"></a>

```go
func RouteDestinationsInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---

##### `RouteUpdateWaitTimeInput`<sup>Optional</sup> <a name="RouteUpdateWaitTimeInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTimeInput"></a>

```go
func RouteUpdateWaitTimeInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `StableCutbackDurationInput`<sup>Optional</sup> <a name="StableCutbackDurationInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDurationInput"></a>

```go
func StableCutbackDurationInput() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRoute"></a>

```go
func HttpRoute() *string
```

- *Type:* *string

---

##### `PodSelectorLabel`<sup>Required</sup> <a name="PodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabel"></a>

```go
func PodSelectorLabel() *string
```

- *Type:* *string

---

##### `RouteUpdateWaitTime`<sup>Required</sup> <a name="RouteUpdateWaitTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTime"></a>

```go
func RouteUpdateWaitTime() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `StableCutbackDuration`<sup>Required</sup> <a name="StableCutbackDuration" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDuration"></a>

```go
func StableCutbackDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resetPropagateService">ResetPropagateService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropagateService` <a name="ResetPropagateService" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resetPropagateService"></a>

```go
func ResetPropagateService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIdsInput">DestinationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateServiceInput">PropagateServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateService">PropagateService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdsInput`<sup>Optional</sup> <a name="DestinationIdsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIdsInput"></a>

```go
func DestinationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PropagateServiceInput`<sup>Optional</sup> <a name="PropagateServiceInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateServiceInput"></a>

```go
func PropagateServiceInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIds"></a>

```go
func DestinationIds() *[]*string
```

- *Type:* *[]*string

---

##### `PropagateService`<sup>Required</sup> <a name="PropagateService" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateService"></a>

```go
func PropagateService() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh">PutGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking">PutServiceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetGatewayServiceMesh">ResetGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetServiceNetworking">ResetServiceNetworking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewayServiceMesh` <a name="PutGatewayServiceMesh" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh"></a>

```go
func PutGatewayServiceMesh(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---

##### `PutServiceNetworking` <a name="PutServiceNetworking" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking"></a>

```go
func PutServiceNetworking(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---

##### `ResetGatewayServiceMesh` <a name="ResetGatewayServiceMesh" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetGatewayServiceMesh"></a>

```go
func ResetGatewayServiceMesh()
```

##### `ResetServiceNetworking` <a name="ResetServiceNetworking" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetServiceNetworking"></a>

```go
func ResetServiceNetworking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMesh">GatewayServiceMesh</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworking">ServiceNetworking</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMeshInput">GatewayServiceMeshInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworkingInput">ServiceNetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewayServiceMesh`<sup>Required</sup> <a name="GatewayServiceMesh" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMesh"></a>

```go
func GatewayServiceMesh() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference</a>

---

##### `ServiceNetworking`<sup>Required</sup> <a name="ServiceNetworking" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworking"></a>

```go
func ServiceNetworking() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference</a>

---

##### `GatewayServiceMeshInput`<sup>Optional</sup> <a name="GatewayServiceMeshInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMeshInput"></a>

```go
func GatewayServiceMeshInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---

##### `ServiceNetworkingInput`<sup>Optional</sup> <a name="ServiceNetworkingInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworkingInput"></a>

```go
func ServiceNetworkingInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetDisablePodOverprovisioning">ResetDisablePodOverprovisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetPodSelectorLabel">ResetPodSelectorLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisablePodOverprovisioning` <a name="ResetDisablePodOverprovisioning" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetDisablePodOverprovisioning"></a>

```go
func ResetDisablePodOverprovisioning()
```

##### `ResetPodSelectorLabel` <a name="ResetPodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetPodSelectorLabel"></a>

```go
func ResetPodSelectorLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deploymentInput">DeploymentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioningInput">DisablePodOverprovisioningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabelInput">PodSelectorLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioning">DisablePodOverprovisioning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabel">PodSelectorLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deploymentInput"></a>

```go
func DeploymentInput() *string
```

- *Type:* *string

---

##### `DisablePodOverprovisioningInput`<sup>Optional</sup> <a name="DisablePodOverprovisioningInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioningInput"></a>

```go
func DisablePodOverprovisioningInput() interface{}
```

- *Type:* interface{}

---

##### `PodSelectorLabelInput`<sup>Optional</sup> <a name="PodSelectorLabelInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabelInput"></a>

```go
func PodSelectorLabelInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisablePodOverprovisioning`<sup>Required</sup> <a name="DisablePodOverprovisioning" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioning"></a>

```go
func DisablePodOverprovisioning() interface{}
```

- *Type:* interface{}

---

##### `PodSelectorLabel`<sup>Required</sup> <a name="PodSelectorLabel" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabel"></a>

```go
func PodSelectorLabel() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun">PutCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetCloudRun">ResetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudRun` <a name="PutCloudRun" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun"></a>

```go
func PutCloudRun(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes"></a>

```go
func PutKubernetes(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---

##### `ResetCloudRun` <a name="ResetCloudRun" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetCloudRun"></a>

```go
func ResetCloudRun()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetKubernetes"></a>

```go
func ResetKubernetes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRunInput">CloudRunInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudRun`<sup>Required</sup> <a name="CloudRun" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRun"></a>

```go
func CloudRun() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetes"></a>

```go
func Kubernetes() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference</a>

---

##### `CloudRunInput`<sup>Optional</sup> <a name="CloudRunInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRunInput"></a>

```go
func CloudRunInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetesInput"></a>

```go
func KubernetesInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary">PutCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard">PutStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetCanary">ResetCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanary` <a name="PutCanary" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary"></a>

```go
func PutCanary(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---

##### `PutStandard` <a name="PutStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard"></a>

```go
func PutStandard(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `ResetCanary` <a name="ResetCanary" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetCanary"></a>

```go
func ResetCanary()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard"></a>

```go
func ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canaryInput">CanaryInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput">StandardInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Canary`<sup>Required</sup> <a name="Canary" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canary"></a>

```go
func Canary() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard"></a>

```go
func Standard() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a>

---

##### `CanaryInput`<sup>Optional</sup> <a name="CanaryInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canaryInput"></a>

```go
func CanaryInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput"></a>

```go
func StandardInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy">PutPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy">PutPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPostdeploy">ResetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPredeploy">ResetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify">ResetVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostdeploy` <a name="PutPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy"></a>

```go
func PutPostdeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---

##### `PutPredeploy` <a name="PutPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy"></a>

```go
func PutPredeploy(value ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---

##### `ResetPostdeploy` <a name="ResetPostdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPostdeploy"></a>

```go
func ResetPostdeploy()
```

##### `ResetPredeploy` <a name="ResetPredeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPredeploy"></a>

```go
func ResetPredeploy()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify"></a>

```go
func ResetVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeploy">Postdeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeploy">Predeploy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeployInput">PostdeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeployInput">PredeployInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Postdeploy`<sup>Required</sup> <a name="Postdeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeploy"></a>

```go
func Postdeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference</a>

---

##### `Predeploy`<sup>Required</sup> <a name="Predeploy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeploy"></a>

```go
func Predeploy() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference</a>

---

##### `PostdeployInput`<sup>Optional</sup> <a name="PostdeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeployInput"></a>

```go
func PostdeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---

##### `PredeployInput`<sup>Optional</sup> <a name="PredeployInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeployInput"></a>

```go
func PredeployInput() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---


### ClouddeployDeliveryPipelineTimeoutsOutputReference <a name="ClouddeployDeliveryPipelineTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



