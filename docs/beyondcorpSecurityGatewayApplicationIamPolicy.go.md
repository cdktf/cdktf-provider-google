# `beyondcorpSecurityGatewayApplicationIamPolicy` Submodule <a name="`beyondcorpSecurityGatewayApplicationIamPolicy` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGatewayApplicationIamPolicy <a name="BeyondcorpSecurityGatewayApplicationIamPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy google_beyondcorp_security_gateway_application_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

beyondcorpsecuritygatewayapplicationiampolicy.NewBeyondcorpSecurityGatewayApplicationIamPolicy(scope Construct, id *string, config BeyondcorpSecurityGatewayApplicationIamPolicyConfig) BeyondcorpSecurityGatewayApplicationIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig">BeyondcorpSecurityGatewayApplicationIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig">BeyondcorpSecurityGatewayApplicationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

beyondcorpsecuritygatewayapplicationiampolicy.BeyondcorpSecurityGatewayApplicationIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

beyondcorpsecuritygatewayapplicationiampolicy.BeyondcorpSecurityGatewayApplicationIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

beyondcorpsecuritygatewayapplicationiampolicy.BeyondcorpSecurityGatewayApplicationIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

beyondcorpsecuritygatewayapplicationiampolicy.BeyondcorpSecurityGatewayApplicationIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BeyondcorpSecurityGatewayApplicationIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BeyondcorpSecurityGatewayApplicationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGatewayApplicationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput"></a>

```go
func SecurityGatewayIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId"></a>

```go
func SecurityGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayApplicationIamPolicyConfig <a name="BeyondcorpSecurityGatewayApplicationIamPolicyConfig" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiampolicy"

&beyondcorpsecuritygatewayapplicationiampolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	PolicyData: *string,
	SecurityGatewayId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#application_id BeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#policy_data BeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id BeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#id BeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#project BeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#application_id BeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#policy_data BeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}.

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId"></a>

```go
SecurityGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id BeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#id BeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamPolicy.BeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application_iam_policy#project BeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---



