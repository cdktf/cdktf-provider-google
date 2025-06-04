# `managedKafkaCluster` Submodule <a name="`managedKafkaCluster` Submodule" id="@cdktf/provider-google.managedKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaCluster <a name="ManagedKafkaCluster" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster google_managed_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaCluster(scope Construct, id *string, config ManagedKafkaClusterConfig) ManagedKafkaCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig">ManagedKafkaClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig">ManagedKafkaClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig">PutCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig">PutGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig">PutRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig">ResetRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityConfig` <a name="PutCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig"></a>

```go
func PutCapacityConfig(value ManagedKafkaClusterCapacityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `PutGcpConfig` <a name="PutGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig"></a>

```go
func PutGcpConfig(value ManagedKafkaClusterGcpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `PutRebalanceConfig` <a name="PutRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig"></a>

```go
func PutRebalanceConfig(value ManagedKafkaClusterRebalanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts"></a>

```go
func PutTimeouts(value ManagedKafkaClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRebalanceConfig` <a name="ResetRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig"></a>

```go
func ResetRebalanceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.ManagedKafkaCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.ManagedKafkaCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.ManagedKafkaCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.ManagedKafkaCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedKafkaCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig">RebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput">CapacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput">GcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput">RebalanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig"></a>

```go
func CapacityConfig() ManagedKafkaClusterCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig"></a>

```go
func GcpConfig() ManagedKafkaClusterGcpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RebalanceConfig`<sup>Required</sup> <a name="RebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig"></a>

```go
func RebalanceConfig() ManagedKafkaClusterRebalanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts"></a>

```go
func Timeouts() ManagedKafkaClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapacityConfigInput`<sup>Optional</sup> <a name="CapacityConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput"></a>

```go
func CapacityConfigInput() ManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `GcpConfigInput`<sup>Optional</sup> <a name="GcpConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput"></a>

```go
func GcpConfigInput() ManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RebalanceConfigInput`<sup>Optional</sup> <a name="RebalanceConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput"></a>

```go
func RebalanceConfigInput() ManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaClusterCapacityConfig <a name="ManagedKafkaClusterCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterCapacityConfig {
	MemoryBytes: *string,
	VcpuCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes"></a>

```go
MemoryBytes *string
```

- *Type:* *string

The memory to provision for the cluster in bytes.

The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#memory_bytes ManagedKafkaCluster#memory_bytes}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount"></a>

```go
VcpuCount *string
```

- *Type:* *string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#vcpu_count ManagedKafkaCluster#vcpu_count}

---

### ManagedKafkaClusterConfig <a name="ManagedKafkaClusterConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaCluster.ManagedKafkaClusterCapacityConfig,
	ClusterId: *string,
	GcpConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaCluster.ManagedKafkaClusterGcpConfig,
	Location: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	RebalanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaCluster.ManagedKafkaClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID to use for the cluster, which will become the final component of the cluster's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig">RebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | rebalance_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig"></a>

```go
CapacityConfig ManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#capacity_config ManagedKafkaCluster#capacity_config}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID to use for the cluster, which will become the final component of the cluster's name.

The ID must be 1-63 characters long, and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#cluster_id ManagedKafkaCluster#cluster_id}

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig"></a>

```go
GcpConfig ManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#gcp_config ManagedKafkaCluster#gcp_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#location ManagedKafkaCluster#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#labels ManagedKafkaCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}.

---

##### `RebalanceConfig`<sup>Optional</sup> <a name="RebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig"></a>

```go
RebalanceConfig ManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

rebalance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#rebalance_config ManagedKafkaCluster#rebalance_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts"></a>

```go
Timeouts ManagedKafkaClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#timeouts ManagedKafkaCluster#timeouts}

---

### ManagedKafkaClusterGcpConfig <a name="ManagedKafkaClusterGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterGcpConfig {
	AccessConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS Key name to use for encryption. |

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig"></a>

```go
AccessConfig ManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#access_config ManagedKafkaCluster#access_config}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS Key name to use for encryption.

The key must be located in the same region as the cluster and cannot be changed. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#kms_key ManagedKafkaCluster#kms_key}

---

### ManagedKafkaClusterGcpConfigAccessConfig <a name="ManagedKafkaClusterGcpConfigAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterGcpConfigAccessConfig {
	NetworkConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs">NetworkConfigs</a></code> | <code>interface{}</code> | network_configs block. |

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```go
NetworkConfigs interface{}
```

- *Type:* interface{}

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#network_configs ManagedKafkaCluster#network_configs}

---

### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs {
	Subnet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet">Subnet</a></code> | <code>*string</code> | Name of the VPC subnet from which the cluster is accessible. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Name of the VPC subnet from which the cluster is accessible.

Both broker and bootstrap server IP addresses and DNS entries are automatically created in the subnet. There can only be one subnet per network, and the subnet must be located in the same region as the cluster. The project may differ. The name of the subnet must be in the format 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#subnet ManagedKafkaCluster#subnet}

---

### ManagedKafkaClusterRebalanceConfig <a name="ManagedKafkaClusterRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterRebalanceConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode">Mode</a></code> | <code>*string</code> | The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#mode ManagedKafkaCluster#mode}

---

### ManagedKafkaClusterTimeouts <a name="ManagedKafkaClusterTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

&managedkafkacluster.ManagedKafkaClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaClusterCapacityConfigOutputReference <a name="ManagedKafkaClusterCapacityConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterCapacityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaClusterCapacityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```go
func MemoryBytesInput() *string
```

- *Type:* *string

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```go
func VcpuCountInput() *string
```

- *Type:* *string

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```go
func MemoryBytes() *string
```

- *Type:* *string

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```go
func Get(index *f64) ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKafkaClusterGcpConfigAccessConfigOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterGcpConfigAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaClusterGcpConfigAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">PutNetworkConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkConfigs` <a name="PutNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```go
func PutNetworkConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">NetworkConfigs</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">NetworkConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```go
func NetworkConfigs() ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `NetworkConfigsInput`<sup>Optional</sup> <a name="NetworkConfigsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```go
func NetworkConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---


### ManagedKafkaClusterGcpConfigOutputReference <a name="ManagedKafkaClusterGcpConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterGcpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaClusterGcpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value ManagedKafkaClusterGcpConfigAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig"></a>

```go
func AccessConfig() ManagedKafkaClusterGcpConfigAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() ManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---


### ManagedKafkaClusterRebalanceConfigOutputReference <a name="ManagedKafkaClusterRebalanceConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterRebalanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaClusterRebalanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---


### ManagedKafkaClusterTimeoutsOutputReference <a name="ManagedKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkacluster"

managedkafkacluster.NewManagedKafkaClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



