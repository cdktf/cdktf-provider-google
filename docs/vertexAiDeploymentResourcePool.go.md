# `vertexAiDeploymentResourcePool` Submodule <a name="`vertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google.vertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiDeploymentResourcePool <a name="VertexAiDeploymentResourcePool" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePool(scope Construct, id *string, config VertexAiDeploymentResourcePoolConfig) VertexAiDeploymentResourcePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig">VertexAiDeploymentResourcePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig">VertexAiDeploymentResourcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources">PutDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetDedicatedResources">ResetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDedicatedResources` <a name="PutDedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources"></a>

```go
func PutDedicatedResources(value VertexAiDeploymentResourcePoolDedicatedResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiDeploymentResourcePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>

---

##### `ResetDedicatedResources` <a name="ResetDedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```go
func ResetDedicatedResources()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.VertexAiDeploymentResourcePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.VertexAiDeploymentResourcePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.VertexAiDeploymentResourcePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.VertexAiDeploymentResourcePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiDeploymentResourcePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference">VertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResourcesInput">DedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```go
func DedicatedResources() VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeouts"></a>

```go
func Timeouts() VertexAiDeploymentResourcePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference">VertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `DedicatedResourcesInput`<sup>Optional</sup> <a name="DedicatedResourcesInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```go
func DedicatedResourcesInput() VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiDeploymentResourcePoolConfig <a name="VertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

&vertexaideploymentresourcepool.VertexAiDeploymentResourcePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DedicatedResources: github.com/cdktf/cdktf-provider-google-go/google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.region">Region</a></code> | <code>*string</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#name VertexAiDeploymentResourcePool#name}

---

##### `DedicatedResources`<sup>Optional</sup> <a name="DedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```go
DedicatedResources VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#dedicated_resources VertexAiDeploymentResourcePool#dedicated_resources}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#region VertexAiDeploymentResourcePool#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```go
Timeouts VertexAiDeploymentResourcePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#timeouts VertexAiDeploymentResourcePool#timeouts}

---

### VertexAiDeploymentResourcePoolDedicatedResources <a name="VertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

&vertexaideploymentresourcepool.VertexAiDeploymentResourcePoolDedicatedResources {
	MachineSpec: github.com/cdktf/cdktf-provider-google-go/google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec,
	MinReplicaCount: *f64,
	AutoscalingMetricSpecs: interface{},
	MaxReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code>interface{}</code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```go
MachineSpec VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#machine_spec VertexAiDeploymentResourcePool#machine_spec}

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#min_replica_count VertexAiDeploymentResourcePool#min_replica_count}

---

##### `AutoscalingMetricSpecs`<sup>Optional</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```go
AutoscalingMetricSpecs interface{}
```

- *Type:* interface{}

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#autoscaling_metric_specs VertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#max_replica_count VertexAiDeploymentResourcePool#max_replica_count}

---

### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

&vertexaideploymentresourcepool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs {
	MetricName: *string,
	Target: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">MetricName</a></code> | <code>*string</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">Target</a></code> | <code>*f64</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#metric_name VertexAiDeploymentResourcePool#metric_name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#target VertexAiDeploymentResourcePool#target}

---

### VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

&vertexaideploymentresourcepool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_count VertexAiDeploymentResourcePool#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_type VertexAiDeploymentResourcePool#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#machine_type VertexAiDeploymentResourcePool#machine_type}

---

### VertexAiDeploymentResourcePoolTimeouts <a name="VertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

&vertexaideploymentresourcepool.VertexAiDeploymentResourcePoolTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```go
func Get(index *f64) VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">PutAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">ResetAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingMetricSpecs` <a name="PutAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```go
func PutAutoscalingMetricSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `ResetAutoscalingMetricSpecs` <a name="ResetAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```go
func ResetAutoscalingMetricSpecs()
```

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">AutoscalingMetricSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingMetricSpecs`<sup>Required</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```go
func AutoscalingMetricSpecs() VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```go
func MachineSpec() VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `AutoscalingMetricSpecsInput`<sup>Optional</sup> <a name="AutoscalingMetricSpecsInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```go
func AutoscalingMetricSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

---


### VertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="VertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaideploymentresourcepool"

vertexaideploymentresourcepool.NewVertexAiDeploymentResourcePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiDeploymentResourcePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



