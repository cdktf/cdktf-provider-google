# `eventarcTrigger` Submodule <a name="`eventarcTrigger` Submodule" id="@cdktf/provider-google.eventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcTrigger <a name="EventarcTrigger" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTrigger(scope Construct, id *string, config EventarcTriggerConfig) EventarcTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria">PutMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport">PutTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType">ResetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination"></a>

```go
func PutDestination(value EventarcTriggerDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `PutMatchingCriteria` <a name="PutMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria"></a>

```go
func PutMatchingCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts"></a>

```go
func PutTimeouts(value EventarcTriggerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

---

##### `PutTransport` <a name="PutTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport"></a>

```go
func PutTransport(value EventarcTriggerTransport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetEventDataContentType` <a name="ResetEventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType"></a>

```go
func ResetEventDataContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport"></a>

```go
func ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.EventarcTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.EventarcTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.EventarcTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.EventarcTrigger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventarcTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions">Conditions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria">MatchingCriteria</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput">EventDataContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput">MatchingCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput">TransportInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType">EventDataContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions"></a>

```go
func Conditions() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination"></a>

```go
func Destination() EventarcTriggerDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria"></a>

```go
func MatchingCriteria() EventarcTriggerMatchingCriteriaList
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts"></a>

```go
func Timeouts() EventarcTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a>

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport"></a>

```go
func Transport() EventarcTriggerTransportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput"></a>

```go
func DestinationInput() EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `EventDataContentTypeInput`<sup>Optional</sup> <a name="EventDataContentTypeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput"></a>

```go
func EventDataContentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MatchingCriteriaInput`<sup>Optional</sup> <a name="MatchingCriteriaInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput"></a>

```go
func MatchingCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput"></a>

```go
func TransportInput() EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `EventDataContentType`<sup>Required</sup> <a name="EventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType"></a>

```go
func EventDataContentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcTriggerConfig <a name="EventarcTriggerConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerDestination,
	Location: *string,
	MatchingCriteria: interface{},
	Name: *string,
	Channel: *string,
	EventDataContentType: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerTimeouts,
	Transport: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerTransport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria">MatchingCriteria</a></code> | <code>interface{}</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel">Channel</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType">EventDataContentType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | transport block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination"></a>

```go
Destination EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#destination EventarcTrigger#destination}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria"></a>

```go
MatchingCriteria interface{}
```

- *Type:* interface{}

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#name EventarcTrigger#name}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Optional.

The name of the channel associated with the trigger in 'projects/{project}/locations/{location}/channels/{channel}' format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#channel EventarcTrigger#channel}

---

##### `EventDataContentType`<sup>Optional</sup> <a name="EventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType"></a>

```go
EventDataContentType *string
```

- *Type:* *string

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to 'application/json' if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#event_data_content_type EventarcTrigger#event_data_content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#labels EventarcTrigger#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have 'iam.serviceAccounts.actAs' permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have 'roles/eventarc.eventReceiver' IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#service_account EventarcTrigger#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts"></a>

```go
Timeouts EventarcTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#timeouts EventarcTrigger#timeouts}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport"></a>

```go
Transport EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#transport EventarcTrigger#transport}

---

### EventarcTriggerDestination <a name="EventarcTriggerDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerDestination {
	CloudRunService: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerDestinationCloudRunService,
	Gke: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerDestinationGke,
	HttpEndpoint: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint,
	NetworkConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerDestinationNetworkConfig,
	Workflow: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow">Workflow</a></code> | <code>*string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `CloudRunService`<sup>Optional</sup> <a name="CloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService"></a>

```go
CloudRunService EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke"></a>

```go
Gke EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#gke EventarcTrigger#gke}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint"></a>

```go
HttpEndpoint EventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#http_endpoint EventarcTrigger#http_endpoint}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig"></a>

```go
NetworkConfig EventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#network_config EventarcTrigger#network_config}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: 'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#workflow EventarcTrigger#workflow}

---

### EventarcTriggerDestinationCloudRunService <a name="EventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerDestinationCloudRunService {
	Service: *string,
	Path: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service">Service</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path">Path</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region">Region</a></code> | <code>*string</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region"></a>

```go
Region *string
```

- *Type:* *string

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#region EventarcTrigger#region}

---

### EventarcTriggerDestinationGke <a name="EventarcTriggerDestinationGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerDestinationGke {
	Cluster: *string,
	Location: *string,
	Namespace: *string,
	Service: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster">Cluster</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location">Location</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace">Namespace</a></code> | <code>*string</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service">Service</a></code> | <code>*string</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path">Path</a></code> | <code>*string</code> | Optional. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#cluster EventarcTrigger#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location"></a>

```go
Location *string
```

- *Type:* *string

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#namespace EventarcTrigger#namespace}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

### EventarcTriggerDestinationHttpEndpoint <a name="EventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerDestinationHttpEndpoint {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri">Uri</a></code> | <code>*string</code> | Required. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: 'http://10.10.10.8:80/route', 'http://svc.us-central1.p.local:8080/'. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#uri EventarcTrigger#uri}

---

### EventarcTriggerDestinationNetworkConfig <a name="EventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerDestinationNetworkConfig {
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#network_attachment EventarcTrigger#network_attachment}

---

### EventarcTriggerMatchingCriteria <a name="EventarcTriggerMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerMatchingCriteria {
	Attribute: *string,
	Value: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute">Attribute</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value">Value</a></code> | <code>*string</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator">Operator</a></code> | <code>*string</code> | Optional. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#attribute EventarcTrigger#attribute}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#value EventarcTrigger#value}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is 'match-path-pattern'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#operator EventarcTrigger#operator}

---

### EventarcTriggerTimeouts <a name="EventarcTriggerTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}.

---

### EventarcTriggerTransport <a name="EventarcTriggerTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerTransport {
	Pubsub: github.com/cdktf/cdktf-provider-google-go/google/v16.eventarcTrigger.EventarcTriggerTransportPubsub,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `Pubsub`<sup>Optional</sup> <a name="Pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub"></a>

```go
Pubsub EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#pubsub EventarcTrigger#pubsub}

---

### EventarcTriggerTransportPubsub <a name="EventarcTriggerTransportPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

&eventarctrigger.EventarcTriggerTransportPubsub {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic">Topic</a></code> | <code>*string</code> | Optional. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: 'projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished' only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/eventarc_trigger#topic EventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcTriggerDestinationCloudRunServiceOutputReference <a name="EventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerDestinationCloudRunServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerDestinationCloudRunServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---


### EventarcTriggerDestinationGkeOutputReference <a name="EventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerDestinationGkeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerDestinationGkeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---


### EventarcTriggerDestinationHttpEndpointOutputReference <a name="EventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerDestinationHttpEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerDestinationHttpEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---


### EventarcTriggerDestinationNetworkConfigOutputReference <a name="EventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerDestinationNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerDestinationNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---


### EventarcTriggerDestinationOutputReference <a name="EventarcTriggerDestinationOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService">PutCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService">ResetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudRunService` <a name="PutCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```go
func PutCloudRunService(value EventarcTriggerDestinationCloudRunService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `PutGke` <a name="PutGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke"></a>

```go
func PutGke(value EventarcTriggerDestinationGke)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```go
func PutHttpEndpoint(value EventarcTriggerDestinationHttpEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```go
func PutNetworkConfig(value EventarcTriggerDestinationNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `ResetCloudRunService` <a name="ResetCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```go
func ResetCloudRunService()
```

##### `ResetGke` <a name="ResetGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke"></a>

```go
func ResetGke()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```go
func ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">CloudRunServiceInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `CloudRunService`<sup>Required</sup> <a name="CloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```go
func CloudRunService() EventarcTriggerDestinationCloudRunServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke"></a>

```go
func Gke() EventarcTriggerDestinationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() EventarcTriggerDestinationHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```go
func NetworkConfig() EventarcTriggerDestinationNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `CloudRunServiceInput`<sup>Optional</sup> <a name="CloudRunServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```go
func CloudRunServiceInput() EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```go
func GkeInput() EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() EventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```go
func NetworkConfigInput() EventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---


### EventarcTriggerMatchingCriteriaList <a name="EventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerMatchingCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventarcTriggerMatchingCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get"></a>

```go
func Get(index *f64) EventarcTriggerMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventarcTriggerMatchingCriteriaOutputReference <a name="EventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerMatchingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventarcTriggerMatchingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventarcTriggerTimeoutsOutputReference <a name="EventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventarcTriggerTransportOutputReference <a name="EventarcTriggerTransportOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerTransportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerTransportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub">PutPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub">ResetPubsub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsub` <a name="PutPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub"></a>

```go
func PutPubsub(value EventarcTriggerTransportPubsub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `ResetPubsub` <a name="ResetPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub"></a>

```go
func ResetPubsub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput">PubsubInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pubsub`<sup>Required</sup> <a name="Pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub"></a>

```go
func Pubsub() EventarcTriggerTransportPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a>

---

##### `PubsubInput`<sup>Optional</sup> <a name="PubsubInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```go
func PubsubInput() EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---


### EventarcTriggerTransportPubsubOutputReference <a name="EventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/eventarctrigger"

eventarctrigger.NewEventarcTriggerTransportPubsubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcTriggerTransportPubsubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription">Subscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```go
func Subscription() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```go
func InternalValue() EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---



