# `beyondcorpSecurityGateway` Submodule <a name="`beyondcorpSecurityGateway` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGateway <a name="BeyondcorpSecurityGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.NewBeyondcorpSecurityGateway(scope Construct, id *string, config BeyondcorpSecurityGatewayConfig) BeyondcorpSecurityGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig">BeyondcorpSecurityGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig">BeyondcorpSecurityGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs">PutHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs">ResetHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHubs` <a name="PutHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs"></a>

```go
func PutHubs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts"></a>

```go
func PutTimeouts(value BeyondcorpSecurityGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetHubs` <a name="ResetHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs"></a>

```go
func ResetHubs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.BeyondcorpSecurityGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.BeyondcorpSecurityGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.BeyondcorpSecurityGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.BeyondcorpSecurityGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BeyondcorpSecurityGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps">ExternalIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs">Hubs</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput">HubsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps"></a>

```go
func ExternalIps() *[]*string
```

- *Type:* *[]*string

---

##### `Hubs`<sup>Required</sup> <a name="Hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs"></a>

```go
func Hubs() BeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts"></a>

```go
func Timeouts() BeyondcorpSecurityGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HubsInput`<sup>Optional</sup> <a name="HubsInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput"></a>

```go
func HubsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```go
func SecurityGatewayIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId"></a>

```go
func SecurityGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayConfig <a name="BeyondcorpSecurityGatewayConfig" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

&beyondcorpsecuritygateway.BeyondcorpSecurityGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityGatewayId: *string,
	DisplayName: *string,
	Hubs: interface{},
	Id: *string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs">Hubs</a></code> | <code>interface{}</code> | hubs block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```go
SecurityGatewayId *string
```

- *Type:* *string

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `Hubs`<sup>Optional</sup> <a name="Hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs"></a>

```go
Hubs interface{}
```

- *Type:* interface{}

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```go
Timeouts BeyondcorpSecurityGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

### BeyondcorpSecurityGatewayHubs <a name="BeyondcorpSecurityGatewayHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

&beyondcorpsecuritygateway.BeyondcorpSecurityGatewayHubs {
	Region: *string,
	InternetGateway: github.com/cdktf/cdktf-provider-google-go/google/v14.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}.

---

##### `InternetGateway`<sup>Optional</sup> <a name="InternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```go
InternetGateway BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}

---

### BeyondcorpSecurityGatewayHubsInternetGateway <a name="BeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

&beyondcorpsecuritygateway.BeyondcorpSecurityGatewayHubsInternetGateway {

}
```


### BeyondcorpSecurityGatewayTimeouts <a name="BeyondcorpSecurityGatewayTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

&beyondcorpsecuritygateway.BeyondcorpSecurityGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.NewBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">AssignedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignedIps`<sup>Required</sup> <a name="AssignedIps" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```go
func AssignedIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### BeyondcorpSecurityGatewayHubsList <a name="BeyondcorpSecurityGatewayHubsList" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.NewBeyondcorpSecurityGatewayHubsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BeyondcorpSecurityGatewayHubsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get"></a>

```go
func Get(index *f64) BeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayHubsOutputReference <a name="BeyondcorpSecurityGatewayHubsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.NewBeyondcorpSecurityGatewayHubsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BeyondcorpSecurityGatewayHubsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">PutInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">ResetInternetGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternetGateway` <a name="PutInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```go
func PutInternetGateway(value BeyondcorpSecurityGatewayHubsInternetGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `ResetInternetGateway` <a name="ResetInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```go
func ResetInternetGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">InternetGatewayInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```go
func InternetGateway() BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `InternetGatewayInput`<sup>Optional</sup> <a name="InternetGatewayInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```go
func InternetGatewayInput() BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/beyondcorpsecuritygateway"

beyondcorpsecuritygateway.NewBeyondcorpSecurityGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



