# `memorystoreInstanceDesiredUserCreatedEndpoints` Submodule <a name="`memorystoreInstanceDesiredUserCreatedEndpoints` Submodule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorystoreInstanceDesiredUserCreatedEndpoints <a name="MemorystoreInstanceDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints google_memorystore_instance_desired_user_created_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpoints(scope Construct, id *string, config MemorystoreInstanceDesiredUserCreatedEndpointsConfig) MemorystoreInstanceDesiredUserCreatedEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig">MemorystoreInstanceDesiredUserCreatedEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig">MemorystoreInstanceDesiredUserCreatedEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints">PutDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints">ResetDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDesiredUserCreatedEndpoints` <a name="PutDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints"></a>

```go
func PutDesiredUserCreatedEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts"></a>

```go
func PutTimeouts(value MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---

##### `ResetDesiredUserCreatedEndpoints` <a name="ResetDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints"></a>

```go
func ResetDesiredUserCreatedEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpoints_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MemorystoreInstanceDesiredUserCreatedEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MemorystoreInstanceDesiredUserCreatedEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MemorystoreInstanceDesiredUserCreatedEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput">DesiredUserCreatedEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DesiredUserCreatedEndpoints`<sup>Required</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints"></a>

```go
func DesiredUserCreatedEndpoints() MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts"></a>

```go
func Timeouts() MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a>

---

##### `DesiredUserCreatedEndpointsInput`<sup>Optional</sup> <a name="DesiredUserCreatedEndpointsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput"></a>

```go
func DesiredUserCreatedEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorystoreInstanceDesiredUserCreatedEndpointsConfig <a name="MemorystoreInstanceDesiredUserCreatedEndpointsConfig" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

&memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	DesiredUserCreatedEndpoints: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region">Region</a></code> | <code>*string</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code>interface{}</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#id MemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project MemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#name MemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#region MemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `DesiredUserCreatedEndpoints`<sup>Optional</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints"></a>

```go
DesiredUserCreatedEndpoints interface{}
```

- *Type:* interface{}

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints MemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#id MemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project MemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts"></a>

```go
Timeouts MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#timeouts MemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

&memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints {
	Connections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections">Connections</a></code> | <code>interface{}</code> | connections block. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections"></a>

```go
Connections interface{}
```

- *Type:* interface{}

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#connections MemorystoreInstanceDesiredUserCreatedEndpoints#connections}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

&memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections {
	PscConnection: github.com/cdktf/cdktf-provider-google-go/google/v14.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `PscConnection`<sup>Optional</sup> <a name="PscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection"></a>

```go
PscConnection MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#psc_connection MemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

&memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection {
	ForwardingRule: *string,
	IpAddress: *string,
	Network: *string,
	PscConnectionId: *string,
	ServiceAttachment: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network">Network</a></code> | <code>*string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId">ProjectId</a></code> | <code>*string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```go
ForwardingRule *string
```

- *Type:* *string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#forwarding_rule MemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#ip_address MemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network"></a>

```go
Network *string
```

- *Type:* *string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#network MemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```go
PscConnectionId *string
```

- *Type:* *string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#psc_connection_id MemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```go
ServiceAttachment *string
```

- *Type:* *string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#service_attachment MemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project_id MemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts <a name="MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

&memorystoreinstancedesiredusercreatedendpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#create MemorystoreInstanceDesiredUserCreatedEndpoints#create}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#delete MemorystoreInstanceDesiredUserCreatedEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#update MemorystoreInstanceDesiredUserCreatedEndpoints#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#create MemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#delete MemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance_desired_user_created_endpoints#update MemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection">PutPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection">ResetPscConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscConnection` <a name="PutPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection"></a>

```go
func PutPscConnection(value MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `ResetPscConnection` <a name="ResetPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection"></a>

```go
func ResetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput">PscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscConnection`<sup>Required</sup> <a name="PscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection"></a>

```go
func PscConnection() MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `PscConnectionInput`<sup>Optional</sup> <a name="PscConnectionInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```go
func PscConnectionInput() MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">PscConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```go
func ForwardingRuleInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PscConnectionIdInput`<sup>Optional</sup> <a name="PscConnectionIdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```go
func PscConnectionIdInput() *string
```

- *Type:* *string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```go
func ServiceAttachmentInput() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections"></a>

```go
func PutConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections"></a>

```go
func ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections"></a>

```go
func Connections() MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput"></a>

```go
func ConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/memorystoreinstancedesiredusercreatedendpoints"

memorystoreinstancedesiredusercreatedendpoints.NewMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



