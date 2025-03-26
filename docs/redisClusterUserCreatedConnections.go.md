# `redisClusterUserCreatedConnections` Submodule <a name="`redisClusterUserCreatedConnections` Submodule" id="@cdktf/provider-google.redisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterUserCreatedConnections <a name="RedisClusterUserCreatedConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnections(scope Construct, id *string, config RedisClusterUserCreatedConnectionsConfig) RedisClusterUserCreatedConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig">RedisClusterUserCreatedConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig">RedisClusterUserCreatedConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints">PutClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints">ResetClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterEndpoints` <a name="PutClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```go
func PutClusterEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts"></a>

```go
func PutTimeouts(value RedisClusterUserCreatedConnectionsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `ResetClusterEndpoints` <a name="ResetClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```go
func ResetClusterEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.RedisClusterUserCreatedConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.RedisClusterUserCreatedConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.RedisClusterUserCreatedConnections_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.RedisClusterUserCreatedConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedisClusterUserCreatedConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints">ClusterEndpoints</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput">ClusterEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterEndpoints`<sup>Required</sup> <a name="ClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```go
func ClusterEndpoints() RedisClusterUserCreatedConnectionsClusterEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts"></a>

```go
func Timeouts() RedisClusterUserCreatedConnectionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `ClusterEndpointsInput`<sup>Optional</sup> <a name="ClusterEndpointsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```go
func ClusterEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterUserCreatedConnectionsClusterEndpoints <a name="RedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

&redisclusterusercreatedconnections.RedisClusterUserCreatedConnectionsClusterEndpoints {
	Connections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">Connections</a></code> | <code>interface{}</code> | connections block. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```go
Connections interface{}
```

- *Type:* interface{}

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#connections RedisClusterUserCreatedConnections#connections}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

&redisclusterusercreatedconnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections {
	PscConnection: github.com/cdktf/cdktf-provider-google-go/google/v14.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `PscConnection`<sup>Optional</sup> <a name="PscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```go
PscConnection RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#psc_connection RedisClusterUserCreatedConnections#psc_connection}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

&redisclusterusercreatedconnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection {
	Address: *string,
	ForwardingRule: *string,
	Network: *string,
	PscConnectionId: *string,
	ServiceAttachment: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">Address</a></code> | <code>*string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">Network</a></code> | <code>*string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">ProjectId</a></code> | <code>*string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```go
Address *string
```

- *Type:* *string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#address RedisClusterUserCreatedConnections#address}

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```go
ForwardingRule *string
```

- *Type:* *string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#forwarding_rule RedisClusterUserCreatedConnections#forwarding_rule}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```go
Network *string
```

- *Type:* *string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#network RedisClusterUserCreatedConnections#network}

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```go
PscConnectionId *string
```

- *Type:* *string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#psc_connection_id RedisClusterUserCreatedConnections#psc_connection_id}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```go
ServiceAttachment *string
```

- *Type:* *string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#service_attachment RedisClusterUserCreatedConnections#service_attachment}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#project_id RedisClusterUserCreatedConnections#project_id}

---

### RedisClusterUserCreatedConnectionsConfig <a name="RedisClusterUserCreatedConnectionsConfig" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

&redisclusterusercreatedconnections.RedisClusterUserCreatedConnectionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	ClusterEndpoints: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region">Region</a></code> | <code>*string</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">ClusterEndpoints</a></code> | <code>interface{}</code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#name RedisClusterUserCreatedConnections#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#region RedisClusterUserCreatedConnections#region}

---

##### `ClusterEndpoints`<sup>Optional</sup> <a name="ClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```go
ClusterEndpoints interface{}
```

- *Type:* interface{}

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#cluster_endpoints RedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```go
Timeouts RedisClusterUserCreatedConnectionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#timeouts RedisClusterUserCreatedConnections#timeouts}

---

### RedisClusterUserCreatedConnectionsTimeouts <a name="RedisClusterUserCreatedConnectionsTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

&redisclusterusercreatedconnections.RedisClusterUserCreatedConnectionsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```go
func Get(index *f64) RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">PutPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">ResetPscConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscConnection` <a name="PutPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```go
func PutPscConnection(value RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `ResetPscConnection` <a name="ResetPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```go
func ResetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">PscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscConnection`<sup>Required</sup> <a name="PscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```go
func PscConnection() RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `PscConnectionInput`<sup>Optional</sup> <a name="PscConnectionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```go
func PscConnectionInput() RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">PscConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```go
func ForwardingRuleInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PscConnectionIdInput`<sup>Optional</sup> <a name="PscConnectionIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```go
func PscConnectionIdInput() *string
```

- *Type:* *string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```go
func ServiceAttachmentInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsClusterEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisClusterUserCreatedConnectionsClusterEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```go
func Get(index *f64) RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```go
func PutConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```go
func ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```go
func Connections() RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```go
func ConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="RedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/redisclusterusercreatedconnections"

redisclusterusercreatedconnections.NewRedisClusterUserCreatedConnectionsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisClusterUserCreatedConnectionsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



