# `managedKafkaTopic` Submodule <a name="`managedKafkaTopic` Submodule" id="@cdktf/provider-google.managedKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaTopic <a name="ManagedKafkaTopic" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic google_managed_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.NewManagedKafkaTopic(scope Construct, id *string, config ManagedKafkaTopicConfig) ManagedKafkaTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig">ManagedKafkaTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig">ManagedKafkaTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount">ResetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts"></a>

```go
func PutTimeouts(value ManagedKafkaTopicTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs"></a>

```go
func ResetConfigs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount"></a>

```go
func ResetPartitionCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.ManagedKafkaTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.ManagedKafkaTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.ManagedKafkaTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.ManagedKafkaTopic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput">ConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput">PartitionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs">Configs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts"></a>

```go
func Timeouts() ManagedKafkaTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput"></a>

```go
func ConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput"></a>

```go
func PartitionCountInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput"></a>

```go
func ReplicationFactorInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs"></a>

```go
func Configs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount"></a>

```go
func PartitionCount() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor"></a>

```go
func ReplicationFactor() *f64
```

- *Type:* *f64

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaTopicConfig <a name="ManagedKafkaTopicConfig" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

&managedkafkatopic.ManagedKafkaTopicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	Location: *string,
	ReplicationFactor: *f64,
	TopicId: *string,
	Configs: *map[string]*string,
	Id: *string,
	PartitionCount: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.managedKafkaTopic.ManagedKafkaTopicTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId">TopicId</a></code> | <code>*string</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs">Configs</a></code> | <code>*map[string]*string</code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | The number of partitions in a topic. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#cluster ManagedKafkaTopic#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#location ManagedKafkaTopic#location}

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor"></a>

```go
ReplicationFactor *f64
```

- *Type:* *f64

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#replication_factor ManagedKafkaTopic#replication_factor}

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#topic_id ManagedKafkaTopic#topic_id}

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs"></a>

```go
Configs *map[string]*string
```

- *Type:* *map[string]*string

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#configs ManagedKafkaTopic#configs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount"></a>

```go
PartitionCount *f64
```

- *Type:* *f64

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#partition_count ManagedKafkaTopic#partition_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts"></a>

```go
Timeouts ManagedKafkaTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#timeouts ManagedKafkaTopic#timeouts}

---

### ManagedKafkaTopicTimeouts <a name="ManagedKafkaTopicTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

&managedkafkatopic.ManagedKafkaTopicTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaTopicTimeoutsOutputReference <a name="ManagedKafkaTopicTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/managedkafkatopic"

managedkafkatopic.NewManagedKafkaTopicTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaTopicTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



