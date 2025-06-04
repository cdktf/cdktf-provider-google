# `computeNetworkFirewallPolicyWithRules` Submodule <a name="`computeNetworkFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyWithRules <a name="ComputeNetworkFirewallPolicyWithRules" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules google_compute_network_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRules(scope Construct, id *string, config ComputeNetworkFirewallPolicyWithRulesConfig) ComputeNetworkFirewallPolicyWithRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig">ComputeNetworkFirewallPolicyWithRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig">ComputeNetworkFirewallPolicyWithRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putTimeouts"></a>

```go
func PutTimeouts(value ComputeNetworkFirewallPolicyWithRulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts">ComputeNetworkFirewallPolicyWithRulesTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeNetworkFirewallPolicyWithRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeNetworkFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.predefinedRules">PredefinedRules</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList">ComputeNetworkFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference">ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `PredefinedRules`<sup>Required</sup> <a name="PredefinedRules" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.predefinedRules"></a>

```go
func PredefinedRules() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.rule"></a>

```go
func Rule() ComputeNetworkFirewallPolicyWithRulesRuleList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList">ComputeNetworkFirewallPolicyWithRulesRuleList</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.timeouts"></a>

```go
func Timeouts() ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference">ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyWithRulesConfig <a name="ComputeNetworkFirewallPolicyWithRulesConfig" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Rule: interface{},
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.name">Name</a></code> | <code>*string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#id ComputeNetworkFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#project ComputeNetworkFirewallPolicyWithRules#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts">ComputeNetworkFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created.
The name must be 1-63 characters long, and comply with RFC1035. Specifically,
the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?
which means the first character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#name ComputeNetworkFirewallPolicyWithRules#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#rule ComputeNetworkFirewallPolicyWithRules#rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#description ComputeNetworkFirewallPolicyWithRules#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#id ComputeNetworkFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#project ComputeNetworkFirewallPolicyWithRules#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesConfig.property.timeouts"></a>

```go
Timeouts ComputeNetworkFirewallPolicyWithRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts">ComputeNetworkFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#timeouts ComputeNetworkFirewallPolicyWithRules#timeouts}

---

### ComputeNetworkFirewallPolicyWithRulesPredefinedRules <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesPredefinedRules {

}
```


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch {

}
```


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config {

}
```


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag {

}
```


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag {

}
```


### ComputeNetworkFirewallPolicyWithRulesRule <a name="ComputeNetworkFirewallPolicyWithRulesRule" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesRule {
	Action: *string,
	Match: github.com/cdktf/cdktf-provider-google-go/google/v16.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch,
	Priority: *f64,
	Description: *string,
	Direction: *string,
	Disabled: interface{},
	EnableLogging: interface{},
	RuleName: *string,
	SecurityProfileGroup: *string,
	TargetSecureTag: interface{},
	TargetServiceAccounts: *[]*string,
	TlsInspect: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.direction">Direction</a></code> | <code>*string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.ruleName">RuleName</a></code> | <code>*string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.targetSecureTag">TargetSecureTag</a></code> | <code>interface{}</code> | target_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#action ComputeNetworkFirewallPolicyWithRules#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.match"></a>

```go
Match ComputeNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#match ComputeNetworkFirewallPolicyWithRules#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#priority ComputeNetworkFirewallPolicyWithRules#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#description ComputeNetworkFirewallPolicyWithRules#description}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#direction ComputeNetworkFirewallPolicyWithRules#direction}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#disabled ComputeNetworkFirewallPolicyWithRules#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#enable_logging ComputeNetworkFirewallPolicyWithRules#enable_logging}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#rule_name ComputeNetworkFirewallPolicyWithRules#rule_name}

---

##### `SecurityProfileGroup`<sup>Optional</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```go
SecurityProfileGroup *string
```

- *Type:* *string

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#security_profile_group ComputeNetworkFirewallPolicyWithRules#security_profile_group}

---

##### `TargetSecureTag`<sup>Optional</sup> <a name="TargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.targetSecureTag"></a>

```go
TargetSecureTag interface{}
```

- *Type:* interface{}

target_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#target_secure_tag ComputeNetworkFirewallPolicyWithRules#target_secure_tag}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```go
TargetServiceAccounts *[]*string
```

- *Type:* *[]*string

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#target_service_accounts ComputeNetworkFirewallPolicyWithRules#target_service_accounts}

---

##### `TlsInspect`<sup>Optional</sup> <a name="TlsInspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```go
TlsInspect interface{}
```

- *Type:* interface{}

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#tls_inspect ComputeNetworkFirewallPolicyWithRules#tls_inspect}

---

### ComputeNetworkFirewallPolicyWithRulesRuleMatch <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesRuleMatch {
	Layer4Config: interface{},
	DestAddressGroups: *[]*string,
	DestFqdns: *[]*string,
	DestIpRanges: *[]*string,
	DestRegionCodes: *[]*string,
	DestThreatIntelligences: *[]*string,
	SrcAddressGroups: *[]*string,
	SrcFqdns: *[]*string,
	SrcIpRanges: *[]*string,
	SrcRegionCodes: *[]*string,
	SrcSecureTag: interface{},
	SrcThreatIntelligences: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config">Layer4Config</a></code> | <code>interface{}</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">DestAddressGroups</a></code> | <code>*[]*string</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns">DestFqdns</a></code> | <code>*[]*string</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">DestRegionCodes</a></code> | <code>*[]*string</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>*[]*string</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>*[]*string</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns">SrcFqdns</a></code> | <code>*[]*string</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag">SrcSecureTag</a></code> | <code>interface{}</code> | src_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>*[]*string</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```go
Layer4Config interface{}
```

- *Type:* interface{}

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#layer4_config ComputeNetworkFirewallPolicyWithRules#layer4_config}

---

##### `DestAddressGroups`<sup>Optional</sup> <a name="DestAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```go
DestAddressGroups *[]*string
```

- *Type:* *[]*string

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#dest_address_groups ComputeNetworkFirewallPolicyWithRules#dest_address_groups}

---

##### `DestFqdns`<sup>Optional</sup> <a name="DestFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```go
DestFqdns *[]*string
```

- *Type:* *[]*string

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#dest_fqdns ComputeNetworkFirewallPolicyWithRules#dest_fqdns}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#dest_ip_ranges ComputeNetworkFirewallPolicyWithRules#dest_ip_ranges}

---

##### `DestRegionCodes`<sup>Optional</sup> <a name="DestRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```go
DestRegionCodes *[]*string
```

- *Type:* *[]*string

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#dest_region_codes ComputeNetworkFirewallPolicyWithRules#dest_region_codes}

---

##### `DestThreatIntelligences`<sup>Optional</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```go
DestThreatIntelligences *[]*string
```

- *Type:* *[]*string

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#dest_threat_intelligences ComputeNetworkFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `SrcAddressGroups`<sup>Optional</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```go
SrcAddressGroups *[]*string
```

- *Type:* *[]*string

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_address_groups ComputeNetworkFirewallPolicyWithRules#src_address_groups}

---

##### `SrcFqdns`<sup>Optional</sup> <a name="SrcFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```go
SrcFqdns *[]*string
```

- *Type:* *[]*string

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_fqdns ComputeNetworkFirewallPolicyWithRules#src_fqdns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_ip_ranges ComputeNetworkFirewallPolicyWithRules#src_ip_ranges}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```go
SrcRegionCodes *[]*string
```

- *Type:* *[]*string

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_region_codes ComputeNetworkFirewallPolicyWithRules#src_region_codes}

---

##### `SrcSecureTag`<sup>Optional</sup> <a name="SrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag"></a>

```go
SrcSecureTag interface{}
```

- *Type:* interface{}

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_secure_tag ComputeNetworkFirewallPolicyWithRules#src_secure_tag}

---

##### `SrcThreatIntelligences`<sup>Optional</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```go
SrcThreatIntelligences *[]*string
```

- *Type:* *[]*string

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#src_threat_intelligences ComputeNetworkFirewallPolicyWithRules#src_threat_intelligences}

---

### ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config {
	IpProtocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#ip_protocol ComputeNetworkFirewallPolicyWithRules#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#ports ComputeNetworkFirewallPolicyWithRules#ports}

---

### ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag <a name="ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeNetworkFirewallPolicyWithRulesTimeouts <a name="ComputeNetworkFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

&computenetworkfirewallpolicywithrules.ComputeNetworkFirewallPolicyWithRulesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#create ComputeNetworkFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#delete ComputeNetworkFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#update ComputeNetworkFirewallPolicyWithRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#create ComputeNetworkFirewallPolicyWithRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#delete ComputeNetworkFirewallPolicyWithRules#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_network_firewall_policy_with_rules#update ComputeNetworkFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag">SrcSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```go
func DestAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```go
func DestFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```go
func DestRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```go
func DestThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```go
func Layer4Config() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```go
func SrcAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```go
func SrcFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `SrcSecureTag`<sup>Required</sup> <a name="SrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag"></a>

```go
func SrcSecureTag() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a>

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```go
func SrcThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a>

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">EnableLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag">TargetSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">TlsInspect</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRules">ComputeNetworkFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```go
func EnableLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```go
func Match() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```go
func SecurityProfileGroup() *string
```

- *Type:* *string

---

##### `TargetSecureTag`<sup>Required</sup> <a name="TargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag"></a>

```go
func TargetSecureTag() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a>

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```go
func TlsInspect() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesPredefinedRules
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRules">ComputeNetworkFirewallPolicyWithRulesPredefinedRules</a>

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a>

---


### ComputeNetworkFirewallPolicyWithRulesRuleList <a name="ComputeNetworkFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">PutLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag">PutSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">ResetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">ResetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">ResetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">ResetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">ResetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">ResetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag">ResetSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">ResetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Config` <a name="PutLayer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```go
func PutLayer4Config(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSrcSecureTag` <a name="PutSrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag"></a>

```go
func PutSrcSecureTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestAddressGroups` <a name="ResetDestAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```go
func ResetDestAddressGroups()
```

##### `ResetDestFqdns` <a name="ResetDestFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```go
func ResetDestFqdns()
```

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetDestRegionCodes` <a name="ResetDestRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```go
func ResetDestRegionCodes()
```

##### `ResetDestThreatIntelligences` <a name="ResetDestThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```go
func ResetDestThreatIntelligences()
```

##### `ResetSrcAddressGroups` <a name="ResetSrcAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```go
func ResetSrcAddressGroups()
```

##### `ResetSrcFqdns` <a name="ResetSrcFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```go
func ResetSrcFqdns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```go
func ResetSrcRegionCodes()
```

##### `ResetSrcSecureTag` <a name="ResetSrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag"></a>

```go
func ResetSrcSecureTag()
```

##### `ResetSrcThreatIntelligences` <a name="ResetSrcThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```go
func ResetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag">SrcSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">DestAddressGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">DestFqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">DestRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">DestThreatIntelligencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">Layer4ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">SrcAddressGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">SrcFqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput">SrcSecureTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">SrcThreatIntelligencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```go
func Layer4Config() ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `SrcSecureTag`<sup>Required</sup> <a name="SrcSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag"></a>

```go
func SrcSecureTag() ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a>

---

##### `DestAddressGroupsInput`<sup>Optional</sup> <a name="DestAddressGroupsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```go
func DestAddressGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestFqdnsInput`<sup>Optional</sup> <a name="DestFqdnsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```go
func DestFqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestRegionCodesInput`<sup>Optional</sup> <a name="DestRegionCodesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```go
func DestRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestThreatIntelligencesInput`<sup>Optional</sup> <a name="DestThreatIntelligencesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```go
func DestThreatIntelligencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4ConfigInput`<sup>Optional</sup> <a name="Layer4ConfigInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```go
func Layer4ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SrcAddressGroupsInput`<sup>Optional</sup> <a name="SrcAddressGroupsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```go
func SrcAddressGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcFqdnsInput`<sup>Optional</sup> <a name="SrcFqdnsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```go
func SrcFqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```go
func SrcRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcSecureTagInput`<sup>Optional</sup> <a name="SrcSecureTagInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput"></a>

```go
func SrcSecureTagInput() interface{}
```

- *Type:* interface{}

---

##### `SrcThreatIntelligencesInput`<sup>Optional</sup> <a name="SrcThreatIntelligencesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```go
func SrcThreatIntelligencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```go
func DestAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```go
func DestFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```go
func DestRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```go
func DestThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```go
func SrcAddressGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```go
func SrcFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```go
func SrcThreatIntelligences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---


### ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag">PutTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">ResetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag">ResetTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">ResetTlsInspect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```go
func PutMatch(value ComputeNetworkFirewallPolicyWithRulesRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `PutTargetSecureTag` <a name="PutTargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag"></a>

```go
func PutTargetSecureTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSecurityProfileGroup` <a name="ResetSecurityProfileGroup" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```go
func ResetSecurityProfileGroup()
```

##### `ResetTargetSecureTag` <a name="ResetTargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag"></a>

```go
func ResetTargetSecureTag()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```go
func ResetTargetServiceAccounts()
```

##### `ResetTlsInspect` <a name="ResetTlsInspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```go
func ResetTlsInspect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference">ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag">TargetSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">SecurityProfileGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput">TargetSecureTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">TlsInspectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">TlsInspect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```go
func Match() ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference">ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `TargetSecureTag`<sup>Required</sup> <a name="TargetSecureTag" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag"></a>

```go
func TargetSecureTag() ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```go
func MatchInput() ComputeNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleMatch">ComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SecurityProfileGroupInput`<sup>Optional</sup> <a name="SecurityProfileGroupInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```go
func SecurityProfileGroupInput() *string
```

- *Type:* *string

---

##### `TargetSecureTagInput`<sup>Optional</sup> <a name="TargetSecureTagInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput"></a>

```go
func TargetSecureTagInput() interface{}
```

- *Type:* interface{}

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```go
func TargetServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInspectInput`<sup>Optional</sup> <a name="TlsInspectInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```go
func TlsInspectInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```go
func SecurityProfileGroup() *string
```

- *Type:* *string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```go
func TlsInspect() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList <a name="ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get"></a>

```go
func Get(index *f64) ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference <a name="ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computenetworkfirewallpolicywithrules"

computenetworkfirewallpolicywithrules.NewComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyWithRules.ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



