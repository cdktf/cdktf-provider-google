# `networkSecurityGatewaySecurityPolicyRule` Submodule <a name="`networkSecurityGatewaySecurityPolicyRule` Submodule" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGatewaySecurityPolicyRule <a name="NetworkSecurityGatewaySecurityPolicyRule" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NewNetworkSecurityGatewaySecurityPolicyRule(scope Construct, id *string, config NetworkSecurityGatewaySecurityPolicyRuleConfig) NetworkSecurityGatewaySecurityPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig">NetworkSecurityGatewaySecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig">NetworkSecurityGatewaySecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher">ResetApplicationMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled">ResetTlsInspectionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityGatewaySecurityPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `ResetApplicationMatcher` <a name="ResetApplicationMatcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher"></a>

```go
func ResetApplicationMatcher()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsInspectionEnabled` <a name="ResetTlsInspectionEnabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled"></a>

```go
func ResetTlsInspectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityGatewaySecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityGatewaySecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityGatewaySecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput">ApplicationMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput">BasicProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput">GatewaySecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput">SessionMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput">TlsInspectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher">ApplicationMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfile">BasicProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher">SessionMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled">TlsInspectionEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ApplicationMatcherInput`<sup>Optional</sup> <a name="ApplicationMatcherInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput"></a>

```go
func ApplicationMatcherInput() *string
```

- *Type:* *string

---

##### `BasicProfileInput`<sup>Optional</sup> <a name="BasicProfileInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput"></a>

```go
func BasicProfileInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GatewaySecurityPolicyInput`<sup>Optional</sup> <a name="GatewaySecurityPolicyInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput"></a>

```go
func GatewaySecurityPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SessionMatcherInput`<sup>Optional</sup> <a name="SessionMatcherInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput"></a>

```go
func SessionMatcherInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectionEnabledInput`<sup>Optional</sup> <a name="TlsInspectionEnabledInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput"></a>

```go
func TlsInspectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationMatcher`<sup>Required</sup> <a name="ApplicationMatcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher"></a>

```go
func ApplicationMatcher() *string
```

- *Type:* *string

---

##### `BasicProfile`<sup>Required</sup> <a name="BasicProfile" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfile"></a>

```go
func BasicProfile() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy"></a>

```go
func GatewaySecurityPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SessionMatcher`<sup>Required</sup> <a name="SessionMatcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher"></a>

```go
func SessionMatcher() *string
```

- *Type:* *string

---

##### `TlsInspectionEnabled`<sup>Required</sup> <a name="TlsInspectionEnabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled"></a>

```go
func TlsInspectionEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGatewaySecurityPolicyRuleConfig <a name="NetworkSecurityGatewaySecurityPolicyRuleConfig" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

&networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BasicProfile: *string,
	Enabled: interface{},
	GatewaySecurityPolicy: *string,
	Location: *string,
	Name: *string,
	Priority: *f64,
	SessionMatcher: *string,
	ApplicationMatcher: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts,
	TlsInspectionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile">BasicProfile</a></code> | <code>*string</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the rule is enforced. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>*string</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.location">Location</a></code> | <code>*string</code> | The location of the gateway security policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher">SessionMatcher</a></code> | <code>*string</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher">ApplicationMatcher</a></code> | <code>*string</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled">TlsInspectionEnabled</a></code> | <code>interface{}</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BasicProfile`<sup>Required</sup> <a name="BasicProfile" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile"></a>

```go
BasicProfile *string
```

- *Type:* *string

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#basic_profile NetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#enabled NetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy"></a>

```go
GatewaySecurityPolicy *string
```

- *Type:* *string

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#gateway_security_policy NetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#location NetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#name NetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#priority NetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `SessionMatcher`<sup>Required</sup> <a name="SessionMatcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher"></a>

```go
SessionMatcher *string
```

- *Type:* *string

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#session_matcher NetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `ApplicationMatcher`<sup>Optional</sup> <a name="ApplicationMatcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher"></a>

```go
ApplicationMatcher *string
```

- *Type:* *string

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#application_matcher NetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#description NetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityGatewaySecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#timeouts NetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `TlsInspectionEnabled`<sup>Optional</sup> <a name="TlsInspectionEnabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled"></a>

```go
TlsInspectionEnabled interface{}
```

- *Type:* interface{}

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#tls_inspection_enabled NetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

### NetworkSecurityGatewaySecurityPolicyRuleTimeouts <a name="NetworkSecurityGatewaySecurityPolicyRuleTimeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

&networksecuritygatewaysecuritypolicyrule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference <a name="NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecuritygatewaysecuritypolicyrule"

networksecuritygatewaysecuritypolicyrule.NewNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



