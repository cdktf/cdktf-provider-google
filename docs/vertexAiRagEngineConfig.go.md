# `vertexAiRagEngineConfig` Submodule <a name="`vertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google.vertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagEngineConfig <a name="VertexAiRagEngineConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfig(scope Construct, id *string, config VertexAiRagEngineConfigConfig) VertexAiRagEngineConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig">PutRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRagManagedDbConfig` <a name="PutRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```go
func PutRagManagedDbConfig(value VertexAiRagEngineConfigRagManagedDbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiRagEngineConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.VertexAiRagEngineConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.VertexAiRagEngineConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.VertexAiRagEngineConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.VertexAiRagEngineConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiRagEngineConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig">RagManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput">RagManagedDbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RagManagedDbConfig`<sup>Required</sup> <a name="RagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```go
func RagManagedDbConfig() VertexAiRagEngineConfigRagManagedDbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts"></a>

```go
func Timeouts() VertexAiRagEngineConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RagManagedDbConfigInput`<sup>Optional</sup> <a name="RagManagedDbConfigInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```go
func RagManagedDbConfigInput() VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagEngineConfigConfig <a name="VertexAiRagEngineConfigConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RagManagedDbConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig">RagManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region">Region</a></code> | <code>*string</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RagManagedDbConfig`<sup>Required</sup> <a name="RagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```go
RagManagedDbConfig VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts"></a>

```go
Timeouts VertexAiRagEngineConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}

---

### VertexAiRagEngineConfigRagManagedDbConfig <a name="VertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigRagManagedDbConfig {
	Basic: github.com/cdktf/cdktf-provider-google-go/google/v16.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic,
	Scaled: github.com/cdktf/cdktf-provider-google-go/google/v16.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled,
	Unprovisioned: github.com/cdktf/cdktf-provider-google-go/google/v16.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled">Scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">Unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```go
Basic VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}

---

##### `Scaled`<sup>Optional</sup> <a name="Scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```go
Scaled VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}

---

##### `Unprovisioned`<sup>Optional</sup> <a name="Unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```go
Unprovisioned VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}

---

### VertexAiRagEngineConfigRagManagedDbConfigBasic <a name="VertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigRagManagedDbConfigBasic {

}
```


### VertexAiRagEngineConfigRagManagedDbConfigScaled <a name="VertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigRagManagedDbConfigScaled {

}
```


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned {

}
```


### VertexAiRagEngineConfigTimeouts <a name="VertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

&vertexairagengineconfig.VertexAiRagEngineConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfigRagManagedDbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagEngineConfigRagManagedDbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">PutScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">PutUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">ResetScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">ResetUnprovisioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```go
func PutBasic(value VertexAiRagEngineConfigRagManagedDbConfigBasic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `PutScaled` <a name="PutScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```go
func PutScaled(value VertexAiRagEngineConfigRagManagedDbConfigScaled)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `PutUnprovisioned` <a name="PutUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```go
func PutUnprovisioned(value VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```go
func ResetBasic()
```

##### `ResetScaled` <a name="ResetScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```go
func ResetScaled()
```

##### `ResetUnprovisioned` <a name="ResetUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```go
func ResetUnprovisioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">Scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">Unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">ScaledInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">UnprovisionedInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```go
func Basic() VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `Scaled`<sup>Required</sup> <a name="Scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```go
func Scaled() VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `Unprovisioned`<sup>Required</sup> <a name="Unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```go
func Unprovisioned() VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```go
func BasicInput() VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `ScaledInput`<sup>Optional</sup> <a name="ScaledInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```go
func ScaledInput() VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `UnprovisionedInput`<sup>Optional</sup> <a name="UnprovisionedInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```go
func UnprovisionedInput() VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### VertexAiRagEngineConfigTimeoutsOutputReference <a name="VertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/vertexairagengineconfig"

vertexairagengineconfig.NewVertexAiRagEngineConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagEngineConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



