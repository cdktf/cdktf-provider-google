# `spannerInstancePartition` Submodule <a name="`spannerInstancePartition` Submodule" id="@cdktf/provider-google.spannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstancePartition <a name="SpannerInstancePartition" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.NewSpannerInstancePartition(scope Construct, id *string, config SpannerInstancePartitionConfig) SpannerInstancePartition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits">ResetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts"></a>

```go
func PutTimeouts(value SpannerInstancePartitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId"></a>

```go
func ResetId()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetProcessingUnits` <a name="ResetProcessingUnits" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits"></a>

```go
func ResetProcessingUnits()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerInstancePartition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.SpannerInstancePartition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.SpannerInstancePartition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.SpannerInstancePartition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.SpannerInstancePartition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpannerInstancePartition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpannerInstancePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput">ProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts"></a>

```go
func Timeouts() SpannerInstancePartitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ProcessingUnitsInput`<sup>Optional</sup> <a name="ProcessingUnitsInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput"></a>

```go
func ProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ProcessingUnits`<sup>Required</sup> <a name="ProcessingUnits" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits"></a>

```go
func ProcessingUnits() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstancePartitionConfig <a name="SpannerInstancePartitionConfig" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

&spannerinstancepartition.SpannerInstancePartitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	DisplayName: *string,
	Instance: *string,
	Name: *string,
	Id: *string,
	NodeCount: *f64,
	ProcessingUnits: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.spannerInstancePartition.SpannerInstancePartitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config">Config</a></code> | <code>*string</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance">Instance</a></code> | <code>*string</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count or processing_units
must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `ProcessingUnits`<sup>Optional</sup> <a name="ProcessingUnits" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits"></a>

```go
ProcessingUnits *f64
```

- *Type:* *f64

The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts"></a>

```go
Timeouts SpannerInstancePartitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

### SpannerInstancePartitionTimeouts <a name="SpannerInstancePartitionTimeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

&spannerinstancepartition.SpannerInstancePartitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstancePartitionTimeoutsOutputReference <a name="SpannerInstancePartitionTimeoutsOutputReference" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/spannerinstancepartition"

spannerinstancepartition.NewSpannerInstancePartitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstancePartitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



